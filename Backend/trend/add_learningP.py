from django.views.decorators.csrf import csrf_exempt
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.applications import VGG16
from sklearn.model_selection import train_test_split
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
from django.http import HttpResponse
import mysql.connector
import os
import time
import pickle

@csrf_exempt
def add_learning(request):
    # DB 연결
    db_config = {
                'host': '127.0.0.1',
                'user': 'root',
                'password': '1234',
                'database': 'sprint2',
            }
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    while True:
        # 재학습 진행 상황 확인
        connection = mysql.connector.connect(**db_config)
        check_progress_query = "SELECT * FROM add_learning"
        cursor = connection.cursor()
        with connection.cursor() as cursor:
                cursor.execute(check_progress_query)
                progress = cursor.fetchall()[0][0]
        check_data_count_query = "SELECT COUNT(*) FROM result"
        cursor = connection.cursor()
        with connection.cursor() as cursor:
                cursor.execute(check_data_count_query)
                data_amount = cursor.fetchall()[0][0]
        
        # 재학습이 필요한 경우
        if data_amount > 0 and progress == 0: 
            cursor = connection.cursor()
            # 재학습 진행 상황을 진행중(1)로 바꾸기
            change_progress_query = "UPDATE add_learning SET progress = 1"
            cursor.execute(change_progress_query)
            connection.commit()
            # 재학습을 위한 모델 불러오기
            vgg = VGG16(include_top=False, input_shape=(224,224,3))
            model = load_model('./dataP/smart_bin2.h5')
            # 재학습을 위해 학습에 사용했던 데이터 불러오기
            origin_data_X = np.load("./dataP/tmp_X.npy")
            origin_data_y = np.load("./dataP/tmp_y.npy")
            # 재학습을 위해 DB에서 새로 추가된 데이터 불러와서 전처리 하기
            cursor = connection.cursor()
            new_data_X = []
            new_data_y = []
            num_of_data = 1
            for i in range(6):
                get_data_query = f"SELECT * FROM result WHERE classification = {i} LIMIT {num_of_data}"
                with connection.cursor() as cursor:
                    cursor.execute(get_data_query)
                    data = cursor.fetchall() 
                for name, result in data:
                    x = plt.imread(f'./{name}')
                    if len(x.shape) == 2:
                        x = cv.cvtColor(x, cv.COLOR_GRAY2RGB)
                    x = cv.resize(x,(224,224))
                    x = x.reshape(1,224,224,-1)
                    x = x[:,:,:,:3]
                    new_data_X.extend(x)
                    new_data_y.append(result)
            
            new_data_X = np.array(new_data_X)
            new_data_y = np.array(new_data_y)
            new_data_y = to_categorical(new_data_y, num_classes=6)
            # 원래 데이터와 새로 추가된 데이터 합하기
            X = np.concatenate((origin_data_X,new_data_X),axis=0)
            y = np.concatenate((origin_data_y,new_data_y),axis=0)
            # 합친 데이터를 훈련, 테스트, 검증 세트로 나누기
            X_, X_test, y_, y_test = train_test_split(X,y,test_size=0.2,random_state=42)
            X_train, X_val, y_train, y_val = train_test_split(X_,y_,test_size=0.2,random_state=42)
            # 모델 스펙을 보여주기위해 따로 변수로 저장하기
            X_train_trans = vgg.predict(X_train)
            X_val_trans = vgg.predict(X_val)
            X_test_trans = vgg.predict(X_test)
            # 재학습
            history = model.fit(X_train_trans,y_train,epochs=20,validation_data=(X_val_trans,y_val))
            
            np.save('./dataP/tmp_X.npy',X)
            np.save('./dataP/tmp_y.npy',y)
            np.save('./dataP/X_val_trans_tmp.npy',X_val_trans)
            np.save('./dataP/y_val_tmp',y_val)
            model.save('./dataP/smart_bin2.h5')
            with open('./dataP/smart_bin2.pickle', mode='wb') as f:
                pickle.dump(history.history, f)
            
            get_alldata_query = "SELECT * FROM result"
            with connection.cursor() as cursor:
                cursor.execute(get_alldata_query)
                alldata = cursor.fetchall() 
            for name, result in alldata:
                file_path = f'./{name}'
                os.remove(file_path)
            
            cursor = connection.cursor()
            file_del_query = "DELETE FROM result"
            cursor.execute(file_del_query)
            connection.commit()
            
            # 재학습 진행 상황을 완료(0)로 바꾸기
            cursor = connection.cursor()
            change_progress_query = "UPDATE add_learning SET progress = 0"
            cursor.execute(change_progress_query)
            connection.commit()
            
            print("재학습이 완료 되었습니다!!!!!!!!!!!!")

            return HttpResponse('0')
        # 재학습이 진행중인 경우
        elif progress == 1:
            print("재학습이 진행 중입니다. 잠시만 기다려주세요")
            time.sleep(5)

        # 재학습이 완료된 경우
        elif data_amount == 0 and progress == 0:
            return HttpResponse('0')

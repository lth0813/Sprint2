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

    check_data_count_query = "SELECT COUNT(*) FROM result"
    cursor = connection.cursor()
    with connection.cursor() as cursor:
            cursor.execute(check_data_count_query)
            data_amount = cursor.fetchall()[0][0]
    if data_amount > 0:
        # 재학습 진행 상황 확인
        check_progress_query = "SELECT * FROM add_learning"
        with connection.cursor() as cursor:
                cursor.execute(check_progress_query)
                progress = cursor.fetchall()[0][0]

        # 재학습 진행 상황을 진행중(1)로 바꾸기
        change_progress_query = "UPDATE add_learning SET progress = 1"
        cursor.execute(change_progress_query)
        connection.commit()
        
        vgg = VGG16(include_top=False, input_shape=(224,224,3))
        model = load_model('smart_bin.h5')
        
        origin_data_X = np.load("./X.npy")
        origin_data_y = np.load("./y.npy")
        
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
                x = cv.resize(x,(224,224))
                x = x.reshape(1,224,224,-1)
                x = x[:,:,:,:3]
                new_data_X.extend(x)
                new_data_y.append(result)
        
        new_data_X = np.array(new_data_X)
        new_data_y = np.array(new_data_y)
        new_data_y = to_categorical(new_data_y, num_classes=6)

        X = np.concatenate((origin_data_X,new_data_X),axis=0)
        y = np.concatenate((origin_data_y,new_data_y),axis=0)
        
        X_train, X_test, y_train, y_test = train_test_split(X,y)
        
        X_train = vgg.predict(X_train)
        X_test = vgg.predict(X_test)
        
        model.fit(X_train,y_train,epochs=3,validation_data=(X_test,y_test))
        
        np.save('X.npy',X)
        np.save('y.npy',y)
        model.save('smart_bin2.h5')
        
        get_alldata_query = "SELECT * FROM result"
        with connection.cursor() as cursor:
            cursor.execute(get_alldata_query)
            alldata = cursor.fetchall() 
        for name, result in alldata:
            file_path = f'./{name}'
            os.remove(file_path)
        
        file_del_query = "DELETE FROM result"
        cursor.execute(file_del_query)
        connection.commit()
        
        # 재학습 진행 상황을 완료(2)로 바꾸기
        change_progress_query = "UPDATE add_learning SET progress = 2"
        cursor.execute(change_progress_query)
        connection.commit()
        
        data_amount = 0
        
        print("재학습이 완료 되었습니다!!!!!!!!!!!!")

        return HttpResponse('0')


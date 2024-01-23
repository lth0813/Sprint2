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

@csrf_exempt
def add_learning(request):
    db_config = {
                'host': '127.0.0.1',
                'user': 'root',
                'password': '1234',
                'database': 'sprint2',
            }
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    check_count_query = "SELECT * FROM result"
    with connection.cursor() as cursor:
        cursor.execute(check_count_query)
        data = cursor.fetchall()
    vgg = VGG16(include_top=False, input_shape=(224,224,3))
    model = load_model('smart_bin.h5')
    
    
    origin_data_X = np.load("./X.npy")
    origin_data_y = np.load("./y.npy")
    new_data_X = []
    new_data_y = []
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
    
    model.fit(X_train,y_train,epochs=20,validation_data=(X_test,y_test))
    
    np.save('X.npy',X)
    np.save('y.npy',y)
    model.save('smart_bin2.h5')
    
    for name, result in data:
        file_path = f'./{name}'
        os.remove(file_path)
    
    file_save_query = "DELETE FROM result"
    cursor = connection.cursor()
    cursor.execute(file_save_query)
    connection.commit()
    connection.close()
    
    return HttpResponse('0')
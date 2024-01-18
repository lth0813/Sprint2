from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.http import JsonResponse

from tensorflow.keras.models import load_model
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.datasets import cifar10
import numpy as np
import matplotlib.pyplot as plt
import os
from io import BytesIO
import base64
from glob import glob
import cv2 as cv

def test(request):
    
    file_name = os.path.dirname(__file__) + '\\testmodel.h5'
    model = load_model(file_name)
    
    x = request.GET.get("file")
    x = glob(f'./upload/6.jpg')
    x = plt.imread(x[0])
    x = cv.resize(x,(150,150)).reshape(1,150,150,-1)
    x = x[:,:,:,:3]
    
    answer = np.argmax(model.predict(x))

    return HttpResponse(f'{answer}')
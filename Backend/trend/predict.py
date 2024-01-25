from django.views.decorators.csrf import csrf_exempt
from glob import glob
from tensorflow.keras.models import load_model
from tensorflow.keras.applications import VGG16
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
from django.http import JsonResponse

@csrf_exempt
def predict(request):
    if request.method == "POST":
        # 파일을 읽기위해 프론트엔드에서 파일이름 가져오기
        filename = request.POST.get('filename')
        # 모델 가져오기
        vgg = VGG16(include_top=False, input_shape=(224,224,3))
        model = load_model('./data/smart_bin.h5')
        # 해당 파일을 가져와서 데이터 전처리하기
        x = glob(f'./{filename}')
        x = plt.imread(x[0])
        if len(x.shape) == 2:
            x = cv.cvtColor(x, cv.COLOR_GRAY2RGB)
        x = cv.resize(x,(224,224)).reshape(1,224,224,-1)
        x = x[:,:,:,:3]
        # 예측(분류)하기
        x = vgg.predict(x)
        # 분류 결과 프론트엔드에 전달하기
        answer = np.argmax(model.predict(x))
    return JsonResponse({'result':str(answer)})
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
        filename = request.POST.get('filename')
        vgg = VGG16(include_top=False, input_shape=(224,224,3))
        model = load_model('./smart_bin.h5')
        x = glob(f'./{filename}')
        x = plt.imread(x[0])
        if len(x.shape) == 2:
            x = cv.cvtColor(x, cv.COLOR_GRAY2RGB)
        x = cv.resize(x,(224,224)).reshape(1,224,224,-1)
        x = x[:,:,:,:3]
        x = vgg.predict(x)
        answer = np.argmax(model.predict(x))
    return JsonResponse({'result':str(answer)})
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from glob import glob
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import to_categorical
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
from django.http import JsonResponse

@api_view(['POST', 'GET'])
@csrf_exempt
def predict(request):
    if request.method == "POST":
        filename = request.POST.get('filename')
        model = load_model('./testmodel.h5')
        x = glob(f'./{filename}')
        x = plt.imread(x[0])
        x = cv.resize(x,(150,150)).reshape(1,150,150,-1)
        x = x[:,:,:,:3]

        answer = np.argmax(model.predict(x))
    return JsonResponse({'result':str(answer)})
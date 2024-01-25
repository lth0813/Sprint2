from django.views.decorators.csrf import csrf_exempt
from tensorflow.keras.models import load_model
import numpy as np
from django.http import JsonResponse
import pickle
from sklearn.metrics import confusion_matrix

@csrf_exempt
def modelspec(request):
    if request.method == "POST":
        # 필요한 변수들 선언
        # confusion matrix용 데이터
        # 재학습시 여기 파일 경로 바꾸기
        model = load_model('./data/smart_bin.h5')
        X_val_trans = np.load('./data/X_val_trans.npy')
        y_val = np.load('./data/y_val.npy')
        y_pred = np.argmax(model.predict(X_val_trans),axis=1)
        y_true = np.argmax(y_val, axis=1)
        cm = confusion_matrix(y_pred, y_true)
        cm = cm.tolist()
        
        # val_accuracy, val_loss용 데이터
        with open('./data/smart_bin.pickle', mode='rb') as f:
            history = pickle.load(f)
        va = np.round(np.mean(history['val_accuracy']), decimals=4)
        vl = np.round(np.mean(history['val_loss']), decimals=4)
    return JsonResponse({'cm' : cm, 'va' : va, 'vl' : vl})
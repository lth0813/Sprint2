from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .forms import DocumentForm
import mysql.connector
from django.http import JsonResponse
import json

# 정답 테스트용 사전
trash_dic = {
                0 : '배터리',
                1 : '상자',
                2 : '유리',
                3 : '금속',
                4 : '종이',
                5 : '플라스틱',
                6 : '일반쓰레기'
            }
@api_view(['POST', 'GET'])
@csrf_exempt
def FileUploader(request):
    if request.method == "POST":
        # DB 연결용
        db_config = {
            'host': '127.0.0.1',
            'user': 'root',
            'password': '1234',
            'database': 'sprint2',
        }
        connection = mysql.connector.connect(**db_config)
        # 데이터 개수 체크
        check_count_query = "SELECT COUNT(*) FROM result"
        with connection.cursor() as cursor:
            cursor.execute(check_count_query)
            data_count = cursor.fetchall()[0][0]
        # # 데이터 개수가 일정 이하면 결과 출력
        if data_count < 100:
            
            # 파일 불러오기
            form = DocumentForm(request.POST, request.FILES)
            if form.is_valid():
                file_model = form.save()
                # 파일 이름 가져오기
                filename = file_model.files.name  
                return JsonResponse({'filename':filename})
            else:
                return HttpResponse("실패")
        
        ## 여기는 아직 테스트용입니다.
        # 데이터 개수가 일정 이상이면 데이터 가지고 재 학습 후 데이터 삭제
        else:
            # model = load_model('./testmodel.h5')
            # get_names = "SELECT * FROM result"
            # with connection.cursor() as cursor:
            #     cursor.execute(get_names)
            #     new_data = cursor.fetchall()
            # # # DB에 저장된 데이터 전처리
            # new_X_train = []
            # new_y_train = []   
            # for name, result in new_data:
            #     x = glob(f'./{name}')
            #     x = plt.imread(x[0])
            #     x = cv.resize(x,(150,150)).reshape(1,150,150,-1)
            #     x = x[:,:,:,:3]
            #     new_X_train.extend(x)
            #     new_y_train.append(result)
            # new_y_train = np.array(new_y_train)
            # new_X_train = np.array(new_X_train)
            # new_y_train = to_categorical(new_y_train)
            # print(new_X_train, new_y_train)
            print('1')
            return HttpResponse("강화 학습")
    elif request.method == "GET":
        return HttpResponse("GET 요청 ")
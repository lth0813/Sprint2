from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import mysql.connector

@csrf_exempt
def SaveDb(request):
    if request.method == "POST":
        # DB에 저장하기 위해 프론트엔드에서 파일이름과 결과값 가져오기
        filename = request.POST.get('filename')
        result = request.POST.get('result')
        db_config = {
                'host': '127.0.0.1',
                'user': 'root',
                'password': '1234',
                'database': 'sprint2',
            }
        # DB에 저장
        connection = mysql.connector.connect(**db_config)
        file_save_query = f"INSERT INTO result(file_name, classification) VALUES('{filename}','{result}')"
        cursor = connection.cursor()
        cursor.execute(file_save_query)
        connection.commit()
        connection.close()
    
    return HttpResponse("응답해 주셔서 감사합니다")
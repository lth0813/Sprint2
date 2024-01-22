from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import mysql.connector

@csrf_exempt
def SaveDb(request):
    if request.method == "POST":
        filename = request.POST.get('filename')
        result = request.POST.get('result')
        db_config = {
                'host': '127.0.0.1',
                'user': 'root',
                'password': '1234',
                'database': 'sprint2',
            }
        connection = mysql.connector.connect(**db_config)
        file_save_query = f"INSERT INTO result(file_name, classification) VALUES('{filename}','{result}')"
        cursor = connection.cursor()
        cursor.execute(file_save_query)
        connection.commit()
        connection.close()
    
    return HttpResponse("응답해 주셔서 감사합니다")
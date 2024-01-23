from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import mysql.connector

@csrf_exempt
def condition_check(request):
    db_config = {
                    'host': '127.0.0.1',
                    'user': 'root',
                    'password': '1234',
                    'database': 'sprint2',
                }
    connection = mysql.connector.connect(**db_config)

    counts = []
    for i in range(6):
        check_count_query = f"SELECT COUNT(classification) FROM result WHERE classification = {i}"
        with connection.cursor() as cursor:
            cursor.execute(check_count_query)
            cnt = cursor.fetchall()[0][0]
        counts.append(cnt)
    # 각 데이터 개수에 따라 재학습 여부 설정
    all_cnt = all(cnt >= 2 for cnt in counts)
    if all_cnt:
        return HttpResponse("1")
    else:
        return HttpResponse("0")
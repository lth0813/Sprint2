from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import mysql.connector

# Create your views here.
def aaa(request):
    return HttpResponse("잘되나????")

def yyy(request):
    return HttpResponse("---------------잘되나????")

@csrf_exempt
def come(request):
    data = request.POST.get('file')
    print(data)
    # db_config = {
    #     'host': '127.0.0.1',
    #     'user': 'root',
    #     'password': '1234',
    #     'database': 'mlproject',
    # }
    # connection = mysql.connector.connect(**db_config)
    # query = f"INSERT INTO practice(id,password) VALUES('{data}','{data2}')"
    # cursor = connection.cursor()
    # cursor.execute(query)
    # connection.commit()
    return HttpResponse('come')
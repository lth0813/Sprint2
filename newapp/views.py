from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pymysql
@csrf_exempt
def main(request):
    data = request.POST.get('id')
    data2 = request.POST.get('password')
    print(data)
    print(data2)
    return HttpResponse("보내집니다")
# Create your views here.

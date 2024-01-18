from django.http import HttpResponse 
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.utils.decorators import method_decorator
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from .forms import DocumentForm


# Create your views here.
@api_view(['POST','GET'])
@csrf_exempt
def FileUploader(request):
    if request.method == "POST":
        form = DocumentForm(request.POST,request.FILES)
        print(form)
        if form.is_valid():
            form.save()
            return Response("업로드완료")
        else:
            return Response("실패")
    elif request.method == "GET":
        return Response("GET 요청 ")

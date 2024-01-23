from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .forms import DocumentForm
from django.http import JsonResponse
import json

@csrf_exempt
def FileUploader(request):
    if request.method == "POST":
        # 파일 불러오기
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            file_model = form.save()
            # 파일 이름 가져오기
            filename = file_model.files.name  
            return JsonResponse({'filename':filename})
        else:
            return HttpResponse("실패")
    elif request.method == "GET":
        return HttpResponse("GET 요청 ")
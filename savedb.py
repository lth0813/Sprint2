from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

@csrf_exempt
def SaveDb(request):
    filename = request.POST.get('filename')
    result = request.POST.get('result')
    return HttpResponse("감사합니다")
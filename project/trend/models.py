from django.db import models

# Create your models here.
class YourFileModel(models.Model):
    description = models.CharField(max_length = 255)
    files = models.FileField(upload_to='upload/', null=True)
    upload_at = models.DateTimeField(auto_now=True)
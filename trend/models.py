import os
import uuid
from django.db import models

def generate_unique_filename(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4().hex}.{ext}"
    return os.path.join('upload/', filename)


class YourFileModel(models.Model):
    description = models.CharField(max_length=255)
    files = models.FileField(upload_to=generate_unique_filename, null=True)
    upload_at = models.DateTimeField(auto_now=True)

    @staticmethod
    def generate_unique_filename(instance,filename):
        return generate_unique_filename(instance,filename)


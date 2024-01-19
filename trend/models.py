import os
from django.db import models
from django.conf import settings
from django.core.files.storage import FileSystemStorage

class Overwrite(FileSystemStorage):
    def get_available_name(self, name, max_length=None):
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, name))
        return name

class YourFileModel(models.Model):
    description = models.CharField(max_length=255)
    files = models.FileField(upload_to='upload/', storage=Overwrite(), null=True)
    upload_at = models.DateTimeField(auto_now=True)
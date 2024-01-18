from rest_framework import serializers
from .models import YourFileModel

class YourFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = YourFileModel
        fields = ('file_field',)
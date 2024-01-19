from django import forms
from .models import YourFileModel

class DocumentForm(forms.ModelForm):
    description = forms.CharField(max_length=255,required=False)
    class Meta :
        model = YourFileModel
        fields = ("description","files")
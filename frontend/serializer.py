from rest_framework import serializers
from .models import SrcModel


class ContactForm(serializers.Serializer):
    name = serializers.CharField(min_length=10, max_length=100, required=True)
    email = serializers.EmailField(min_length=10, required=True)
    message = serializers.CharField(min_length=10, max_length=500)


class UrlSerializer(serializers.ModelSerializer):

    class Meta():
        model = SrcModel
        fields = "__all__"

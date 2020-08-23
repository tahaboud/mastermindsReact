from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import EmailMessage
from django.conf import settings
from .serializer import ContactForm, UrlSerializer
from rest_framework.serializers import Serializer
from .models import SrcModel
from rest_framework import viewsets, permissions


def send_email(name, email, message):
    email_subject = "Contacted by {0} and his email is '{1}'".format(
        name, email)
    mm_email_message = EmailMessage(
        email_subject,
        message,
        settings.EMAIL_HOST_USER,
        [settings.EMAIL_HOST_USER],
    )
    user_subject = "Thank you for contacting us"
    user_message = "Hello {0}. \n Thank you for contacting us, you will be contacted shortly by one of our staff about your message. \n Here is a copy of your message: \n {1}".format(
        name, message)
    user_email_message = EmailMessage(
        user_subject,
        user_message,
        settings.EMAIL_HOST_USER,
        [email],
    )
    mm_email_message.send(fail_silently=True)
    user_email_message.send(fail_silently=True)


def index(request):
    return render(request, "frontend/index.html")


class ContactView(APIView):
    def post(self, request):
        data = request.data
        serializer = ContactForm(data=data)
        if serializer.is_valid():
            send_email(
                serializer.data["name"], serializer.data["email"], serializer.data["message"])
            return Response({"message": "success"}, status=200)
        return Response({"errors": serializer.errors}, status=400, content_type="application/json")


class UrlView(viewsets.ModelViewSet):
    queryset = SrcModel.objects.all()
    serializer_class = UrlSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

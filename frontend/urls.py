from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register("url", views.UrlView, "urls")

urlpatterns = [
    path("", views.index),
    path("treasure/", views.index),
    path("contact/", views.ContactView.as_view()),
    path("", include(router.urls)),
]

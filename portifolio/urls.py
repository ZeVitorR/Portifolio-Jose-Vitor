from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.redireciona_portifolio, name="index"),
    path('Portifolio/', views.portifolio, name="Portifolio"),
]

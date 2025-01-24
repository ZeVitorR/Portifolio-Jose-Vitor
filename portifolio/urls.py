from django.urls import path
from . import views

urlpatterns = [
    path('', views.redireciona_portifolio, name="index"),
    path('Portifolio/', views.portifolio, name="Portifolio"),
    path('Portifolio/aboutme', views.sobremim, name="sobremim"),
]

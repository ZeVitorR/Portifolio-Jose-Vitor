from django.urls import path
from . import views

urlpatterns = [
    path('',views.sobremim, name="sobremim"),
    path('formacoes/',views.formacoes, name="sobremim"),
    path('experiencias/',views.experiencias, name="sobremim")
]

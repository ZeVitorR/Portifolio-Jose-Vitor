from django.shortcuts import render,redirect

# Create your views here.
def redireciona_portifolio(request):
    render(request,'portifolio.html')

def portifolio(request):
    render(request,'portifolio.html')
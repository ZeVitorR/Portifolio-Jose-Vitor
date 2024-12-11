from django.shortcuts import render

# Create your views here.
def sobremim(request):
    return render(request,
                  'sobremim.html')

def formacoes(request):
    return render(request,
                  'formacoes.html')

def experiencias(request):
    return render(request,
                  'experiencias.html')
from django.shortcuts import render, redirect


# Função para redirecionar para o portifolio
def redireciona_portifolio(request):
    return redirect('Portifolio')


def portifolio(request):
    return render(request,
                  'portifolio.html')

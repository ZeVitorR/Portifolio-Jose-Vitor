from django.shortcuts import render, redirect
from django.utils import translation
from django.utils.translation import gettext as _

# Função para redirecionar para o portifolio
def redireciona_portifolio(request):
    return redirect('Portifolio')


def portifolio(request):
    html_language = translation.get_language()
    return render(request,
                  'portifolio.html',
                  {'html_language': html_language})

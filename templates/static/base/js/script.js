var menuOpen = false

function openmenu() {
    lista = document.getElementById('itemLista')
    if(menuOpen == true){
        lista.style.display = "none"
        menuOpen = false
    }else{
        lista.style.display = 'flex'
        menuOpen = true
    }
}


const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        }else{
            entry.target.classList.remove('animate')
        }
    })
})
const elements = document.querySelectorAll('[data-animation]')
elements.forEach((element) =>{
    myObserver.observe(element)
})
console.log('oi')
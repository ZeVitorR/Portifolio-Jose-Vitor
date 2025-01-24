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

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.observer');
  const navLinks = document.querySelectorAll('.menu-link');

  // Configurações do IntersectionObserver
  const observerOptions = {
    root: null, // Usa a janela como root
    threshold: 0.4, // 60% da seção precisa estar visível
  };

  // Função chamada pelo IntersectionObserver
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Criação do IntersectionObserver
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observa cada seção
  sections.forEach(section => observer.observe(section));
});
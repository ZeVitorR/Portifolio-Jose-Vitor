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

// Cache selectors
var lastId,
    topMenu = $("#itemLista"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Scrool
$(window).scroll(function(){
   // Otem a posição atual
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // obtendo o elemento atual
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   //obtendo o id do elemento atual
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       //Removendo e adicionando a classe active
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.getElementById('cards');
    const card = document.querySelector('.card');
    const styles = window.getComputedStyle(card);
    const width = card.offsetWidth
    const marginRight = parseInt(styles.marginRight);
    const marginLeft = parseInt(styles.marginLeft);
    const cardWidth = width + marginRight + marginLeft; // Largura do card com margem
    let currentIndex = 0;

    function updateSlider() {
        cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        console.log(width,marginLeft,marginRight, cardWidth)
    }

    prevBtn.addEventListener('click', function() {
        console.log('clickesq')
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = document.querySelectorAll('.card').length - 1;
        }
        updateSlider();
    });

    nextBtn.addEventListener('click', function() {
        console.log('clickdir')
        if (currentIndex < document.querySelectorAll('.card').length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });
});

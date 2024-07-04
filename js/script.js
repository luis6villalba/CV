let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextItem, 3500); // Cambia de imagen cada 3.5 segundos

document.addEventListener('DOMContentLoaded', () => {
    items[currentIndex].classList.add('active');
});
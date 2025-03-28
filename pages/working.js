const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

let currentIndex = 0;
const visibleCards = 3;  // Show 3 cards at once

function moveSlide(direction) {
    const maxIndex = totalCards - visibleCards;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = currentIndex * -(100 / visibleCards);
    track.style.transform = `translateX(${offset}%)`;
}

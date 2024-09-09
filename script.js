const carousel = document.querySelector('.carousel');
const itemCards = Array.from(document.querySelectorAll('.carousel-item-card'));
const prevButtonPassion = document.getElementById('prevPassion');
const nextButtonPassion = document.getElementById('nextPassion');

const itemCardWidth = itemCards[0].offsetWidth;
const itemCardMargin = parseFloat(getComputedStyle(itemCards[0]).marginRight);
const totalItemCardWidth = itemCardWidth + itemCardMargin;

let currentIndex = 0;

const cloneItems = (count) => {
    const fragment = document.createDocumentFragment();
    itemCards.forEach(card => {
        const clone = card.cloneNode(true);
        fragment.appendChild(clone);
    });
    for (let i = 0; i < count; i++) {
        carousel.appendChild(fragment.cloneNode(true));
    }
};

const initialItemCount = itemCards.length;
cloneItems(2); // Clone item cards twice

carousel.style.width = `${totalItemCardWidth * (itemCards.length * 3)}px`;

function updateCarousel() {
    carousel.style.transform = `translateX(-${totalItemCardWidth * currentIndex}px)`;
}

nextButtonPassion.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= itemCards.length * 2) {
        currentIndex = currentIndex - itemCards.length;
        carousel.style.transition = 'none'; // Disable transition for instant reset
        updateCarousel();
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 50); // Delay to ensure transition reactivation
    } else {
        updateCarousel();
    }
});

prevButtonPassion.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentIndex + itemCards.length;
        carousel.style.transition = 'none'; // Disable transition for instant reset
        updateCarousel();
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 50); // Delay to ensure transition reactivation
    } else {
        updateCarousel();
    }
});

const testimonialContainer = document.querySelector('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentTestIndex = 0;
const card = document.querySelector('.testimonial-card');
const cardWidth = card.offsetWidth;
const marginRight = parseFloat(getComputedStyle(card).marginRight);
const totalCards = document.querySelectorAll('.testimonial-card').length;
const visibleCards = 3;

function updateContainerWidth() {
  if (window.innerWidth <= 500) {
    // Adjust width for mobile devices
    testimonialContainer.style.width = `${(cardWidth + marginRight) * totalCards}px`;
  } else {
    // Default width for larger screens
    testimonialContainer.style.width = `${(cardWidth + marginRight) * totalCards * 100}px`;
  }
}

// Initial update of container width
updateContainerWidth();

// Update width on window resize
window.addEventListener('resize', updateContainerWidth);

nextButton.addEventListener('click', () => {
  currentTestIndex++;
  testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;

  if (currentTestIndex >= totalCards - visibleCards) {
    for (let i = 0; i < totalCards; i++) {
      const card = document.querySelectorAll('.testimonial-card')[i].cloneNode(true);
      testimonialContainer.appendChild(card);
    }
  }
});

prevButton.addEventListener('click', () => {
  if (currentTestIndex > 0) {
    currentTestIndex--;
    testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;
  } else {
    for (let i = 0; i < totalCards; i++) {
      const card = document.querySelectorAll('.testimonial-card')[i].cloneNode(true);
      testimonialContainer.insertBefore(card, testimonialContainer.firstChild);
    }
    currentTestIndex = totalCards - visibleCards;
    testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerMenu.addEventListener("click", function() {
      mobileNav.classList.toggle("active");
  });
});

document.getElementById('navigateButton').onclick = function() {
  window.location.href = 'learn-more.html';
};
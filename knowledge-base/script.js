// const carousel = document.querySelector('.carousel');
// const itemCards = Array.from(document.querySelectorAll('.carousel-item-card'));
// const prevButtonPassion = document.getElementById('prevPassion');
// const nextButtonPassion = document.getElementById('nextPassion');

// const itemCardWidth = itemCards[0].offsetWidth;
// const itemCardMargin = parseFloat(getComputedStyle(itemCards[0]).marginRight);
// const totalItemCardWidth = itemCardWidth + itemCardMargin;

// let currentIndex = 0;

// const cloneItems = (count) => {
//     const fragment = document.createDocumentFragment();
//     itemCards.forEach(card => {
//         const clone = card.cloneNode(true);
//         fragment.appendChild(clone);
//     });
//     for (let i = 0; i < count; i++) {
//         carousel.appendChild(fragment.cloneNode(true));
//     }
// };

// const initialItemCount = itemCards.length;
// cloneItems(2); // Clone item cards twice

// carousel.style.width = `${totalItemCardWidth * (itemCards.length * 3)}px`;

// function updateCarousel() {
//     carousel.style.transform = `translateX(-${totalItemCardWidth * currentIndex}px)`;
// }

// nextButtonPassion.addEventListener('click', () => {
//     currentIndex++;
//     if (currentIndex >= itemCards.length * 2) {
//         currentIndex = currentIndex - itemCards.length;
//         carousel.style.transition = 'none'; // Disable transition for instant reset
//         updateCarousel();
//         setTimeout(() => {
//             carousel.style.transition = 'transform 0.5s ease'; // Re-enable transition
//         }, 50); // Delay to ensure transition reactivation
//     } else {
//         updateCarousel();
//     }
// });

// prevButtonPassion.addEventListener('click', () => {
//     currentIndex--;
//     if (currentIndex < 0) {
//         currentIndex = currentIndex + itemCards.length;
//         carousel.style.transition = 'none'; // Disable transition for instant reset
//         updateCarousel();
//         setTimeout(() => {
//             carousel.style.transition = 'transform 0.5s ease'; // Re-enable transition
//         }, 50); // Delay to ensure transition reactivation
//     } else {
//         updateCarousel();
//     }
// });

// const testimonialContainer = document.querySelector('.testimonial');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let currentTestIndex = 0;
// const card = document.querySelector('.testimonial-card');
// const cardWidth = card.offsetWidth;
// const marginRight = parseFloat(getComputedStyle(card).marginRight);
// const totalCards = document.querySelectorAll('.testimonial-card').length;
// const visibleCards = 3;

// function updateContainerWidth() {
//   if (window.innerWidth <= 500) {
//     // Adjust width for mobile devices
//     testimonialContainer.style.width = `${(cardWidth + marginRight) * totalCards}px`;
//   } else {
//     // Default width for larger screens
//     testimonialContainer.style.width = `${(cardWidth + marginRight) * totalCards * 100}px`;
//   }
// }

// // Initial update of container width
// updateContainerWidth();

// // Update width on window resize
// window.addEventListener('resize', updateContainerWidth);

// nextButton.addEventListener('click', () => {
//   currentTestIndex++;
//   testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;

//   if (currentTestIndex >= totalCards - visibleCards) {
//     for (let i = 0; i < totalCards; i++) {
//       const card = document.querySelectorAll('.testimonial-card')[i].cloneNode(true);
//       testimonialContainer.appendChild(card);
//     }
//   }
// });

// prevButton.addEventListener('click', () => {
//   if (currentTestIndex > 0) {
//     currentTestIndex--;
//     testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;
//   } else {
//     for (let i = 0; i < totalCards; i++) {
//       const card = document.querySelectorAll('.testimonial-card')[i].cloneNode(true);
//       testimonialContainer.insertBefore(card, testimonialContainer.firstChild);
//     }
//     currentTestIndex = totalCards - visibleCards;
//     testimonialContainer.style.transform = `translateX(-${(cardWidth + marginRight) * currentTestIndex}px)`;
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const hamburgerMenu = document.querySelector(".hamburger-menu");
//   const mobileNav = document.querySelector(".mobile-nav");

//   hamburgerMenu.addEventListener("click", function() {
//       mobileNav.classList.toggle("active");
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const sun = document.querySelector('.sun');
  sun.style.opacity = '0';
  
  sun.addEventListener('load', () => {
    sun.style.animation = 'revealSun 1s ease-out forwards';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const domainName = window.location.hostname;
  document.title = domainName;
});

document.getElementById("contact-button").addEventListener("click", function() {
  window.location.href = "mailto:didaktiker@gmx.de";
});

document.addEventListener('DOMContentLoaded', function() {
  const impressumElement = document.querySelector('.impressum');
  
  function handleImpressumClick() {
      // Check if we're on mobile (under 500px)
      if (window.innerWidth < 500) {
          window.location.href = 'impressum.html';
      }
  }
  
  // Add click event to the impressum text
  if (impressumElement) {
      impressumElement.addEventListener('click', handleImpressumClick);
  }
  
  // Also handle window resize to update the event if needed
  window.addEventListener('resize', function() {
      if (impressumElement) {
          if (window.innerWidth < 500) {
              // Make it look clickable on mobile
              impressumElement.style.cursor = 'pointer';
              impressumElement.style.textDecoration = 'underline';
          } else {
              // Return to default on larger screens
              impressumElement.style.cursor = '';
              impressumElement.style.textDecoration = '';
          }
      }
  });
  
  // Initialize the correct state on page load
  if (impressumElement && window.innerWidth < 500) {
      impressumElement.style.cursor = 'pointer';
      impressumElement.style.textDecoration = 'underline';
  }
});

// let innerCursor = document.querySelector(".cursor-inner");
// let outerCursor = document.querySelector(".cursor-outer");
// document.addEventListener("mousemove", moveCursor);
// function moveCursor(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     innerCursor.style.left = `${x}px`;
//     innerCursor.style.top = `${y}px`;
//     outerCursor.style.left = `${x}px`;
//     outerCursor.style.top = `${y}px`;
// }

// let links = Array.from(document.querySelectorAll("a"));
// let buttons = Array.from(document.querySelectorAll("button"));
// let inputs = Array.from(document.querySelectorAll("input"));

// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   link.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });
//   link.addEventListener("mouseover", () => {
//     outerCursor.classList.add("fade");
//   });
//   link.addEventListener("mouseleave", () => {
//     outerCursor.classList.remove("fade");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   button.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });
//   button.addEventListener("mouseover", () => {
//     outerCursor.classList.add("fade");
//   });
//   button.addEventListener("mouseleave", () => {
//     outerCursor.classList.remove("fade");
//   });
// });

// inputs.forEach((input) => {
//   input.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   input.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });
//   input.addEventListener("mouseover", () => {
//     outerCursor.classList.add("fade");
//   });
//   input.addEventListener("mouseleave", () => {
//     outerCursor.classList.remove("fade");
//   });
// });
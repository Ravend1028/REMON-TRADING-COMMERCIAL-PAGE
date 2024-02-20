var copy = document.querySelector(".icons_container").cloneNode(true);
document.querySelector(".sliding_icons").appendChild(copy);

/*
function slideContainer() {
  const productContainers = document.querySelectorAll('.cards_container');
  const nextButtons = document.querySelectorAll('.next_button');
  const prevButtons = document.querySelectorAll('.prev_button');

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButtons[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    });

    prevButtons[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    });
  });
}

*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      const headerHeight = document.querySelector('header').offsetHeight; // Adjust if needed

      if (target) {
          let offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          if (targetId === '#ABOUT') {
              offsetTop = 0;
          }

          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  slideContainer();
});

function slideContainer() {
  const productContainers = document.querySelectorAll('.cards_container');
  const nextButtons = document.querySelectorAll('.next_button');
  const prevButtons = document.querySelectorAll('.prev_button');

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButtons[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    });

    prevButtons[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    });
  });
}







function displayInfo(item) {
  if(item === 'warehouse') {
    document.querySelector('.card_desc').innerHTML = `Operating directly from our warehouse, Remon Trading brings you affordable 
    products without compromising on quality. By eliminating unnecessary costs, 
    we ensure that you receive top-notch items at unbeatable prices. 
    Experience the convenience and affordability of shopping with us, 
    where quality is never sacrificed for cost-effectiveness.`;
  } else if(item === 'discount') {
    document.querySelector('.card_desc').innerHTML = `At our store, we're dedicated to ensuring that our customers always get the best value. 
     That's why we make it a point to offer discounts on our products and services. 
     Whether you're shopping for essentials or treating yourself to something special,\
     you can always expect to find great deals that make your purchase even more rewarding. 
     Shop with us and experience the satisfaction of saving while you shop.`; 
  } else if(item === 'quality'){
    document.querySelector('.card_desc').innerHTML = `Our product stands as a testament to quality and trustworthiness.
     With a steadfast commitment to excellence, we meticulously craft each item to meet the highest standards. 
     Backed by a legacy of reliability, our brand has earned the trust of countless customers who seek nothing but the best. 
     Experience the assurance of quality and the peace of mind that comes with choosing our trusted products.`;
  }
}

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

document.addEventListener("DOMContentLoaded", function() {
  slideContainer();
});

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





document.addEventListener('DOMContentLoaded', function () {
  // References
  let menuBtn = document.getElementById('menuBtn');
  let menu = document.getElementById('menu');
  let header = document.getElementById('header');
  let hero = document.querySelectorAll('.heroSection');
  const logos = document.querySelector('.clients');

  // Menu Toggle
  menuBtn.addEventListener('click', function () {
    if (menu.classList.contains('d-none')) {
      menu.classList.remove('d-none');
      menu.classList.add('d-flex');
    } else {
      menu.classList.add('d-none');
    }
  });

  // Header Background Change On Scroll
  window.addEventListener('scroll', function () {
    let heroBottom = Array.from(hero).reduce((minBottom, hero) => {
      return Math.min(minBottom, hero.getBoundingClientRect().bottom);
    }, Number.POSITIVE_INFINITY);
    if (header.getBoundingClientRect().top <= heroBottom) {
      header.classList.add('bg-main-neo');
      header.classList.remove('bg-main');
    } else {
      header.classList.add('bg-main');
      header.classList.remove('bg-main-neo');
    }
  });

  // Sponsers Slider
  let startX;
  let scrollLeft;

  logos.addEventListener('mousedown', (e) => {
    startX = e.pageX - logos.offsetLeft;
    scrollLeft = logos.scrollLeft;
    logos.classList.add('active');
  });

  logos.addEventListener('mouseleave', () => {
    logos.classList.remove('active');
  });

  logos.addEventListener('mouseup', () => {
    logos.classList.remove('active');
  });

  logos.addEventListener('mousemove', (e) => {
    if (!logos.classList.contains('active')) return;
    e.preventDefault();
    const x = e.pageX - logos.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    logos.scrollLeft = scrollLeft - walk;
  });

  // Swiper Init
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  // AOS Init
  AOS.init();
});
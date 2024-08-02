document.addEventListener('DOMContentLoaded', function () {
  // References
  const logos = document.querySelector('.clients');
  const header = document.querySelector('.header');
  const hero = document.querySelectorAll('.hero');

  // Header Background Change On Scroll
  if (header) {
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
  } else {
    console.error('Header element with class "header" not found.');
  }

  if (logos) {
  // Sponsors Slider
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
} else {
  
}

  // Swiper Init
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
});

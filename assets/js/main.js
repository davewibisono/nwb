document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        if (menu.classList.contains('d-none')) {
            menu.classList.remove('d-none');
            menu.classList.add('d-flex');
        } else {
            menu.classList.add('d-none');
        }
    });

    // Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
});
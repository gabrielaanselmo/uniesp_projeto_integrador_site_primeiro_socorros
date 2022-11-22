var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const goTopBtn = document.querySelector('.go-top-btn');

  window.addEventListener('scroll', checkHeight)
  
  function checkHeight(){
    if(window.scrollY > 200) {
      goTopBtn.style.display = "flex"
    } else {
      goTopBtn.style.display = "none"
    }
  }
  
  goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
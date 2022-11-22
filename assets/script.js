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

  const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop <= 150) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  }
};
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  refreshButtonVisibility();
});
const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");

drawerIcon.addEventListener("click", function () {
  drawerIcon.classList.toggle("is-checked");
  drawerContent.classList.toggle("is-checked");
});

document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function () {
      drawerIcon.classList.remove("is-checked");
      drawerContent.classList.remove("is-checked");
    });
  });

const aboutSlider = new Swiper(".about__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    900: {
      spaceBetween: 20,
    },
  },
});

setTimeout(() => {
  aboutSlider.params.speed = 4000;
}, 2000 * 2);

document.querySelectorAll(".js-modal-open").forEach((btn) => {
  btn.addEventListener("click",() => {
    const id = btn.dataset.modal;
    document.querySelector(`#modal-${id}`).classList.add("is-open");
  });
});

document.querySelectorAll(".prize-modal").forEach((modal) => {
  modal.addEventListener("click", (e) =>{
    if(e.target.closest(".js-modal-close") || e.target === modal){
      modal.classList.remove("is-open");
    }
  });
});


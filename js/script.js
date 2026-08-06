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
    document.body.classList.add("is-modal-open");
  });
});

document.querySelectorAll(".prize-modal").forEach((modal) => {
  modal.addEventListener("click", (e) =>{
    if(e.target.closest(".js-modal-close") || e.target === modal){
      modal.classList.remove("is-open");
      document.body.classList.remove("is-modal-open");
    }
  });
});

const swiper = new Swiper("#js-spots-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  centeredSlides: true,
  navigation: {
    nextEl: '#js-spots-next',
    prevEl: '#js-spots-prev',
  },
  breakpoints: {
    900: {
      spaceBetween: 24,
      centeredSlides: false,
    },
  },
});

jQuery('a[href^="#"]').on("click", function (e) {
  const id = jQuery(this).attr("href");
  let target;

  if (id === "#") {
    target = jQuery("html");
  } else {
    const el = document.getElementById(id.slice(1));
    if (!el) return;
    target = jQuery(el);
  }

  e.preventDefault();
  jQuery("html, body").animate({ scrollTop: target.offset().top }, 300, "swing");
});

jQuery(window).on("scroll", function () {
  if (300 < jQuery(window).scrollTop()) {
    jQuery("#js-page-top").addClass("is-show");
  } else {
    jQuery("#js-page-top").removeClass("is-show");
  }
});

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});

jQuery(".js-accordion-trigger").on("click", function () {
  const $trigger = jQuery(this);
  const isOpen = $trigger.toggleClass("is-open").hasClass("is-open");
  $trigger.attr("aria-expanded", isOpen);
  $trigger.next(".js-accordion-body").stop(true, true).slideToggle(300);
});

const contactForm = document.getElementById("js-contact-form");

if (contactForm) {
  const fields = contactForm.querySelectorAll("input, select, textarea");

  const validateField = function (field) {
    const row = field.closest(".contact-form__row");
    if (!row) return true;

    const isValid = field.checkValidity();
    row.classList.toggle("is-error",!isValid);
    field.setAttribute("aria-invalid", String(!isValid));
    return isValid;
  };

  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (field.closest(".contact-form__row")?.classList.contains("is-error")) {
        validateField(field);
      }
    });
    field.addEventListener("change", function() {
      validateField(field);
    });
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault ();

    let isValid = true;
    fields.forEach(function (field) {
      if(!validateField(field)) isValid = false;
    });

    if (!isValid) {
      const firstError = contactForm.querySelector(".is-error input, .is-error select, .is-error textarea");
      if (firstError) firstError.focus();
      return;
    }

    alert("送信が完了しました。ありがとうございます！");
    contactForm.reset();
    contactForm.querySelectorAll(".is-error").forEach(function (row) {
      row.classList.remove("is-error");
      row.querySelectorAll("[arie-invalid]").forEach(function (f){
        f.removeAttribute("aria-invalid");
      });
    });
  });
}
const navSlide = () => {
  const burger = document.querySelector(".humbergur");
  const navLinks = document.querySelector(".nav-item");
  const links = document.querySelectorAll(".nav-link");
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
};

const navLinks = () => {
  const home = document.querySelector(".home");
  const events = document.querySelector(".events");
  const treasure = document.querySelector(".treasure");
  const contact = document.querySelector(".contact");

  home.addEventListener("click", () => {
    events.classList.remove("active");
    treasure.classList.remove("active");
    contact.classList.remove("active");
    home.classList.remove("active");
    home.classList.add("active");
  });
  events.addEventListener("click", () => {
    events.classList.remove("active");
    treasure.classList.remove("active");
    contact.classList.remove("active");
    home.classList.remove("active");
    events.classList.add("active");
  });
  treasure.addEventListener("click", () => {
    events.classList.remove("active");
    treasure.classList.remove("active");
    contact.classList.remove("active");
    home.classList.remove("active");
    treasure.classList.add("active");
  });
  contact.addEventListener("click", () => {
    events.classList.remove("active");
    treasure.classList.remove("active");
    contact.classList.remove("active");
    home.classList.remove("active");
    contact.classList.add("active");
  });
};

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  simulateTouch: true,
  initialSlide: 5,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

navSlide();
navLinks();

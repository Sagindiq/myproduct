const daynight = document.querySelector(".header__button-daynight");
const nightTheme = document.querySelector(".night-theme")
const nightBurger = document.querySelector(".header__burger")
const nightBurgerInner = document.querySelector(".header__burger-inner")

daynight.addEventListener("click", function () {
  nightTheme.classList.toggle("night-theme--active");
  nightBurger.classList.toggle("night-background");
  nightBurgerInner.classList.toggle("night-background");
})

const burger = document.querySelector(".header__burger")
const header = document.querySelector(".header__box")
const headerShadow = document.querySelector(".header__shadow")

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger--opened");
  header.classList.toggle("header__box--opened");
  headerShadow.classList.toggle("header__shadow--activated");
})

// faqs code
const faqsBtn = document.querySelector(".faqs__btn");
const faqsDesc = document.querySelector(".faqs__description");


faqsBtn.addEventListener("click", function () {
  faqsBtn.classList.toggle("faqs__btn--activated");
  faqsDesc.classList.toggle("faqs__description--opened");
})
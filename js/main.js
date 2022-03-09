const daynight = document.querySelector(".header__button-daynight");
const nightTheme = document.querySelector(".night-theme")
const nightBurger = document.querySelector(".header__burger")
const nightBurgerInner = document.querySelector(".header__burger-inner")

daynight.addEventListener("click", function() {
  nightTheme.classList.toggle("night-theme--active");
  nightBurger.classList.toggle("night-background");
  nightBurgerInner.classList.toggle("night-background");
})
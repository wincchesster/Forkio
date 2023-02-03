// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Перевірка на мобільний пристрій
// Повертає true, якщо пристрій мобільний
// Повертає false, якщо пристрій десктопний
function isItMobile() {
    if (window.innerWidth <= 767) {
        return true;
    } else {
        return false;
    }
}


// поміняти клас на "_icon_logoMin" для мобільних пристроїв, або на "_icon_logo" для десктопу та планшетів 
function logoChanger() {
    if (isItMobile()) {
        document.querySelector(".header__logo").classList.add("_icon_logoMin");
        document.querySelector(".header__logo").classList.remove("_icon_logo");
      } else {
        document.querySelector(".header__logo").classList.add("_icon_logo");
        document.querySelector(".header__logo").classList.remove("_icon_logoMin");
      }

}



// logoChanger();

window.onload = logoChanger;
window.onresize = logoChanger;


// картинка з класом "pcr-slide" виїзжає з права на ліво на 20 пікселів при скролі вниз та виїзжає з ліва на право на 20 пікселів при скролі вверх

function animateSlide() {
    var picture = document.querySelector(".pcr-slide");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 20) {
        clearInterval(id);
      } else {
        pos++; 
        picture.style.right = pos + "px"; 
      }
    }
  }
  
  window.addEventListener("scroll", animateSlide);










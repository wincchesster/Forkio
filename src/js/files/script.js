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







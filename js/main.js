//MODAL SEARCH

var elHeaderMainMobileSearch = document.querySelector(".header-main__mobile-search");
var elHeaderMainForm = document.querySelector(".header-main__modal");

if (elHeaderMainMobileSearch) {
  elHeaderMainMobileSearch.addEventListener('click', function (evt) {
    evt.preventDefault();

    elHeaderMainForm.classList.add('header-main__modal--open');
  });
}

if (elHeaderMainForm) {
  elHeaderMainForm.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-main__modal')) {
      elHeaderMainForm.classList.remove('header-main__modal--open');
    }
  });
}

// MENU GAMBURGER

var elHeaderMenuLink = document.querySelector(".header-menu__link");
var elHeaderMenuBox = document.querySelector(".header-menu__box");

if (elHeaderMenuLink) {
  elHeaderMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elHeaderMenuBox.classList.toggle('header-menu__box--open');
  });
}

// CLOSE CATIGORY BTN

var elsCatigoryCheckBtn = document.querySelectorAll(".catigory__check-btn");
var elsCatigoryChecked = document.querySelectorAll(".catigory__checked");

elsCatigoryCheckBtn.forEach(function (list) {
  list.addEventListener('click', function () {
    list.closest("p").remove(".catigory__checked");
  });  
});

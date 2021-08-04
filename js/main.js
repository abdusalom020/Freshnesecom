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


// GRID AND LIST

var elCatigory = document.querySelector(".catigory");
var elCatigoryBtnGrid = document.querySelector(".catigory__btn-grid");
var elCatigoryBtnList = document.querySelector(".catigory__btn-list");

if (elCatigoryBtnGrid) {
  elCatigoryBtnGrid.addEventListener('click', function() {
    elCatigory.classList.add('catigory__product-grid-stile');
    elCatigoryBtnGrid.classList.add('catigory__btn--active');
    elCatigoryBtnList.classList.remove('catigory__btn--active');
  });
};

if (elCatigoryBtnList) {
  elCatigoryBtnList.addEventListener('click', function() {
    elCatigory.classList.remove('catigory__product-grid-stile');
    elCatigoryBtnGrid.classList.remove('catigory__btn--active');
    elCatigoryBtnList.classList.add('catigory__btn--active');
  });
};


var elCatigoryProductMobileBtn = document.querySelector('.catigory__product-mobile-btn');
var elCatigoryProductsLeft = document.querySelector('.catigory__products-left');

if (elCatigoryProductMobileBtn) {
  elCatigoryProductMobileBtn.addEventListener('click', function () {
    elCatigoryProductsLeft.classList.toggle('catigory__settings--open');
  });
}

var elsHeader = document.querySelector('.site-header');
var elsHeaderNavBtn = elsHeader.querySelector('.site-header__btn');

if (elsHeaderNavBtn){
  elsHeaderNavBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('site-header--open');
  });
}

//MODAL SEARCH

var elHeaderMainMobileSearch = document.querySelector(".header-main__mobile-search");
var elHeaderMainForm = document.querySelector(".header-main__modal");

if (elHeaderMainMobileSearch) {
  elHeaderMainMobileSearch.addEventListener('click', function (evt) {
    evt.preventDefault();

    elHeaderMainForm.classList.add('header-main__modal--open');

    var elSearchInput = elModal.querySelector('.search-modal__field');
    elSearchInput.value = '';
    elSearchInput.focus();
  });
}

if (elHeaderMainForm) {
  elHeaderMainForm.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-main__modal')) {
      elHeaderMainForm.classList.remove('header-main__modal--open');
    }
  });
}

var elHeaderMenuLink = document.querySelector(".header-menu__link");
var elHeaderMenuBox = document.querySelector(".header-menu__box");

if (elHeaderMenuLink) {
  elHeaderMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elHeaderMenuBox.classList.add('header-menu__box--open');
  });
}

if (elHeaderMenuBox) {
  elHeaderMenuBox.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-menu__box')) {
      elHeaderMenuBox.classList.remove('header-menu__box--open');
    }
  });
}

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

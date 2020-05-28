"use strict";

(function () {
  window.onload = function () {
    var logo = document.querySelector('.header h1');
    var navbarToggle = document.querySelector('.navbar-toggle');
    var shoppingCart = document.querySelector('.shopping-cart');
    var navbarMenu = document.querySelector('.navbar-menu');
    var footer = document.querySelector('.footer'); // 隱藏 header 功能和 footer

    logo.parentNode.classList.remove('col');
    logo.parentNode.classList.add('col-12');
    navbarToggle.classList.add('d-none');
    shoppingCart.classList.add('d-none');
    navbarMenu.classList.add('d-none');
    footer.classList.add('d-none');
  };
})();
//# sourceMappingURL=done.js.map

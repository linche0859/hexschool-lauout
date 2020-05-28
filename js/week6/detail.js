"use strict";

(function () {
  // header 的字體轉為黑色
  var navbarToggle = document.querySelector('.navbar-toggle');
  var h1 = document.querySelector('.header .h1 a');
  var cart = document.querySelector('.shopping-cart .material-icons');
  var menuItems = document.querySelectorAll('.navbar-menu .title');
  var materialIcon = document.querySelector('.menu-list > li > .material-icons');
  navbarToggle.style.color = '#121212';
  h1.style.color = '#121212';
  cart.style.color = '#121212';
  materialIcon.style.color = '#121212';
  menuItems.forEach(function (element) {
    element.style.color = '#121212';
  });
})();
//# sourceMappingURL=detail.js.map

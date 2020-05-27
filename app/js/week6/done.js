(function () {
  window.onload = function () {
    const logo = document.querySelector('.header h1');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const shoppingCart = document.querySelector('.shopping-cart');
    const navbarMenu = document.querySelector('.navbar-menu');
    const footer = document.querySelector('.footer');

    // 隱藏 header 功能和 footer
    logo.parentNode.classList.remove('col');
    logo.parentNode.classList.add('col-12');
    navbarToggle.classList.add('d-none');
    shoppingCart.classList.add('d-none');
    navbarMenu.classList.add('d-none');
    footer.classList.add('d-none');
  };
})();

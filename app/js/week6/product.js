(function () {
  // header 的字體轉為黑色
  const navbarToggle = document.querySelector('.navbar-toggle');
  const h1 = document.querySelector('.header .h1 a');
  const cart = document.querySelector('.shopping-cart .material-icons');
  const menuItems = document.querySelectorAll('.navbar-menu .title');
  const materialIcon = document.querySelector(
    '.menu-list > li > .material-icons'
  );

  navbarToggle.style.color = '#121212';
  h1.style.color = '#121212';
  cart.style.color = '#121212';
  materialIcon.style.color = '#121212';
  menuItems.forEach((element) => {
    element.style.color = '#121212';
  });

  // 加入 active 樣式
  const product = document.querySelector('[data-navbar-menu="product"]');
  const all = document.querySelector('[data-navbar-product-list="all"]');
  product.classList.add('active');
  all.classList.add('active');
})();

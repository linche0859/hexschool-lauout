"use strict";

(function () {
  AOS.init({
    once: true
  }); // 介紹的 gear 圖片

  var gearImage = document.querySelector('.introduce__item:first-child .introduce__item__image'); // 介紹的 strip 圖片

  var stripImage = document.querySelector('.introduce__item:last-child .introduce__item__image'); // 收集的圖片

  var collectionImage = document.querySelector('.collection__rider');

  function scrollHandler() {
    var scrollTop = window.scrollY;
    var windowsHeight = window.innerHeight;

    var _gearImage$getBoundin = gearImage.getBoundingClientRect(),
        gearTop = _gearImage$getBoundin.top;

    var _stripImage$getBoundi = stripImage.getBoundingClientRect(),
        stripTop = _stripImage$getBoundi.top;

    var _collectionImage$getB = collectionImage.getBoundingClientRect(),
        collectionTop = _collectionImage$getB.top;

    if (scrollTop + windowsHeight / 2 >= gearTop) {
      gearImage.style['background-position'] = "-".concat(parseInt(scrollTop / 6), "px center");
    }

    if (scrollTop + windowsHeight / 2 >= stripTop) {
      stripImage.style['background-position'] = "-".concat(parseInt(scrollTop / 6), "px center");
    }

    if (collectionTop >= scrollTop || collectionTop <= scrollTop) {
      collectionImage.style['background-position'] = "center -".concat(parseInt(scrollTop / 5), "px");
    }
  }

  window.addEventListener('scroll', scrollHandler);
})();
//# sourceMappingURL=all.js.map

(function () {
  AOS.init({
    once: true,
  });

  // 介紹的 gear 圖片
  const gearImage = document.querySelector(
    '.introduce__item:first-child .introduce__item__image'
  );
  // 介紹的 strip 圖片
  const stripImage = document.querySelector(
    '.introduce__item:last-child .introduce__item__image'
  );
  // 收集的圖片
  const collectionImage = document.querySelector('.collection__rider');

  function scrollHandler() {
    const scrollTop = window.scrollY;
    const windowsHeight = window.innerHeight;
    const { top: gearTop } = gearImage.getBoundingClientRect();
    const { top: stripTop } = stripImage.getBoundingClientRect();
    const { top: collectionTop } = collectionImage.getBoundingClientRect();

    if (scrollTop + windowsHeight / 2 >= gearTop) {
      gearImage.style['background-position'] = `-${parseInt(
        scrollTop / 6
      )}px center`;
    }
    if (scrollTop + windowsHeight / 2 >= stripTop) {
      stripImage.style['background-position'] = `-${parseInt(
        scrollTop / 6
      )}px center`;
    }
    if (collectionTop >= scrollTop || collectionTop <= scrollTop) {
      collectionImage.style['background-position'] = `center -${parseInt(
        scrollTop / 5
      )}px`;
    }
  }

  window.addEventListener('scroll', scrollHandler);
})();

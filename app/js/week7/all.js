(function () {
  AOS.init({
    once: true,
  });

  // const top = introduceContent;

  // const imgs = document.querySelectorAll('img');
  // const h1 = document.querySelector('h1');
  let offset = 0;
  function scrollHandler() {
    const scrollTop = window.scrollY;
    const scrollBottom = window.scrollY + window.innerHeight;

    const img = document.querySelector('.introduce__item__image');
    const { top, height } = document
      .querySelector('.introduce__item__image')
      .getBoundingClientRect();
    const imgMiddle = top + height / 2;
    if (imgMiddle < scrollBottom && imgMiddle > scrollTop) {
      if (offset > 0) offset--;
      img.style['background-position'] = `center left calc(50% - ${offset}px)`;
    } else {
      if (offset <= 100) offset++;
      console.log(offset);

      img.style['background-position'] = `center left calc(50% + ${offset}px)`;
    }

    // if(introduceContentRect.top)
    // imgs.forEach(img => {
    //   const imgMiddle = img.offsetTop + img.height / 2;
    //   if (imgMiddle < scrollBottom && imgMiddle > scrollTop) {
    //     img.classList.add('active');
    //   } else {
    //     img.classList.remove('active');
    //   }
    // });
  }

  window.addEventListener('scroll', scrollHandler);
})();

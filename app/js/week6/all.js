(function () {
  const slider = document.querySelector('.slider');
  let startX = 0;

  /**
   * 開始拖曳事件
   * @param {object} e event
   */
  function startDragHandler(e) {
    slider.classList.add('slider-active');
    startX = e.pageX;
  }

  /**
   * 拖曳事件
   * @param {object} e event
   */
  function dragHandler(e) {
    if (slider.classList.contains('slider-active')) {
      // 假設按下去 pageX 100，即 startX 100
      // 往左移動，pageX 會不斷減少，即 pageX - startX 為負
      slider.scrollLeft -= (e.pageX - startX) * 3;
      startX = e.pageX;
    }
  }

  /**
   * 停止拖曳事件
   * @param {object} e event
   */
  function stopDragHandler(e) {
    slider.classList.remove('slider-active');
  }

  slider.addEventListener('mousedown', startDragHandler);
  slider.addEventListener('mousemove', dragHandler);
  slider.addEventListener('mouseup', stopDragHandler);
  slider.addEventListener('mouseleave', stopDragHandler);
})();

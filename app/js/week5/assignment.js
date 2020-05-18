// 側邊欄加入 active
document.querySelector('a[data-sidebar="assignment"]').classList.add('active');

// header 加入標題
document.querySelector('.header-title').innerText = 'Assignment';

// 隱藏加入管理者按鈕
document.querySelector('.header-add-admin').classList.add('d-none');

// 顯示管理者回覆區
function displayManagerReply() {
  document.querySelector('.manager-reply').classList.add('show');
}

// 隱藏管理者回覆區
function hideManagerReply() {
  document.querySelector('.manager-reply').classList.remove('show');
}

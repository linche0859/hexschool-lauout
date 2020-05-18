"use strict";

// 側邊欄加入 active
document.querySelector('a[data-sidebar="admin"]').classList.add('active'); // header 加入標題

document.querySelector('.header-title').innerText = 'Admin'; // 隱藏課程下拉選單

document.querySelector('.header-course-dropdown').classList.add('d-none');
//# sourceMappingURL=admin.js.map

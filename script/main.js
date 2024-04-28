
document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.querySelector('.mobile-menu-icon img');
  var navOverlay = document.querySelector('.nav-overlay');

  menuIcon.addEventListener('click', function() {
      if (navOverlay.classList.contains('open')) {
          navOverlay.classList.remove('open'); // 关闭菜单
      } else {
          navOverlay.classList.add('open'); // 打开菜单
      }
  });

  // 可选: 点击菜单项也关闭菜单
  navOverlay.querySelectorAll('.menu a').forEach(function(item) {
      item.addEventListener('click', function() {
          navOverlay.classList.remove('open');
      });
  });
});
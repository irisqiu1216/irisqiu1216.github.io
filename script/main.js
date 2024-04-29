
document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.querySelector('.mobile-menu-icon img');
  var navOverlay = document.querySelector('.nav-overlay');

  menuIcon.addEventListener('click', function() {
      if (navOverlay.classList.contains('open')) {
          navOverlay.classList.remove('open'); 
      } else {
          navOverlay.classList.add('open'); 
      }
  });

  
  navOverlay.querySelectorAll('.menu a').forEach(function(item) {
      item.addEventListener('click', function() {
          navOverlay.classList.remove('open');
      });
  });
});
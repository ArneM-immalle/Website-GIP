(function() {
  "use strict";
  var menuId;
  function init() {
    menuId = document.getElementById("menu");
    document.addEventListener("scroll", scrollMenu, false);
  }
  function scrollMenu() {
    if (document.documentElement.scrollTop > window.screen.height * 1.45) {
      menuId.classList.add("scroll");
      menuId.classList.remove("no-scroll");
    } else {
      menuId.classList.remove("scroll");
      menuId.classList.add("no-scroll");
    }
  }
  document.addEventListener("DOMContentLoaded", init, false);
})();

(function() {
  "use strict";
  var mobBtn, topMenu;

  function init() {
    mobBtn = document.getElementById("mobile-btn");
    topMenu = document.getElementById("top-menu");
    mobBtn.addEventListener("click", mobileMenu, false);
  }

  function mobileMenu() {
    if (topMenu.classList.contains("mobile-open")) {
      topMenu.classList.remove("mobile-open");
    } else {
      topMenu.classList.add("mobile-open");
    }
    if (mobBtn.classList.contains("hamburger-cross")) {
      mobBtn.classList.remove("hamburger-cross");
    } else {
      mobBtn.classList.add("hamburger-cross");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

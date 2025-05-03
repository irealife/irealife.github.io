"use strict";

;
(function () {
  var body = document.querySelector('body');
  var burger = body.querySelector('.header__burger');
  var menu = body.querySelector('.header__menu');
  burger.addEventListener("click", function (event) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
})();
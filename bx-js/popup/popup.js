"use strict";

;
(function () {
  var popupLinks = document.querySelectorAll('.popup-link');
  var body = document.querySelector('body');
  var lockPadding = document.querySelectorAll('.lock-padding');
  var headerMenu = document.querySelector('.header__menu');
  var burger = document.querySelector('.header__burger');
  var video = document.querySelector('.video__item');
  var unlock = true;
  var timeout = 800;
  if (popupLinks.length > 0) {
    var _loop = function _loop() {
      var popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        if (popupLink.hasAttribute('href')) {
          var popupName = popupLink.getAttribute('href').replace('#', '');
          var currentPopup = document.getElementById(popupName);
          popupOpen(currentPopup);
          video.pause();
          e.preventDefault();
        } else {
          var _popupName = popupLink.getAttribute('id');
          var _currentPopup = document.getElementById(_popupName);
          popupOpen(_currentPopup);
          e.preventDefault();
        }
      });
    };
    for (var index = 0; index < popupLinks.length; index++) {
      _loop();
    }
  }
  var popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    var _loop2 = function _loop2() {
      var el = popupCloseIcon[_index];
      el.addEventListener("click", function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    };
    for (var _index = 0; _index < popupCloseIcon.length; _index++) {
      _loop2();
    }
  }

  // video.ontimeupdate = function() { popupOpenVideo() };
  //
  // function popupOpenVideo() {
  //     let durationHalf = (video.duration / 2);
  //     setTimeout(function () {
  //         document.getElementById('popup').click();
  //     }, 200);
  // }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      var popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      currentPopup.classList.add('open');
      headerMenu.classList.remove('active');
      burger.classList.remove('active');
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }
  function popupClose(popupActive) {
    var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }
  function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
      for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
        var el = lockPadding[_index2];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  function bodyUnlock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
          var el = lockPadding[_index3];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      var popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  });
})();
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();
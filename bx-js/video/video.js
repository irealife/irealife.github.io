"use strict";

;
(function () {
  var videoPlayer = document.querySelector('.video');
  var video = videoPlayer.querySelector('.video__item');
  var playButton = videoPlayer.querySelector('.video__icon');
  var videoId = document.getElementById('video');
  var popupTriggered = false;
  playButton.addEventListener('click', function (e) {
    if (video.paused) {
      video.play();
      e.target.textContent = '';
      document.getElementById('play').classList.add('video__icon_off');
      video.setAttribute("controls", "controls");
    } else {
      video.pause();
      e.target.textContent = '';
    }
  });
  videoId.addEventListener('timeupdate', popupOpenVideo);
  function popupOpenVideo() {
    if (!popupTriggered && video.duration && video.currentTime >= video.duration / 2) {
      popupTriggered = true;
      document.getElementById('popup').click();
      video.pause();
    }
  }
})();
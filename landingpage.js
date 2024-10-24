const video = document.getElementById('video');
const muteToggle = document.getElementById('mute-toggle');

muteToggle.addEventListener('change', function () {
  if (this.checked) {
    video.muted = false;  // Unmute the video
  } else {
    video.muted = true;  // Mute the video
  }
});

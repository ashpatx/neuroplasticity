const player = document.getElementById("player");
const toggleVideoButton = document.getElementById("toggleVideoButton");
const videoIcon = document.getElementById("videoIcon");

function playSong(id) {
  const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
  player.src = videoUrl;
}

function toggleVideo() {
  const isPlayerHidden = player.style.display === 'none';

  player.style.display = isPlayerHidden ? 'block' : 'none';
  videoIcon.className = `fa-solid icon ${isPlayerHidden ? 'fa-video' : 'fa-video-slash'}`;

  const command = isPlayerHidden ? 'pauseVideo' : 'playVideo';
  player.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
}

var enableVideo = document.querySelector('.watch-item');
var closeVideo = document.querySelector('.close-button');

var video = document.querySelector('.video-overlay');

enableVideo.addEventListener('click', onEnable);
closeVideo.addEventListener('click', onClose);

function onEnable() {
	video.style.display = 'block';
}

function onClose() {
	video.style.display = 'none';
}
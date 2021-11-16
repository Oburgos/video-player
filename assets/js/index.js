const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

$backward.addEventListener("click", function () {
  handleTimeline(-10);
});

$forward.addEventListener("click", function () {
  handleTimeline(10);
});

function handleTimeline(seconds) {
  $video.currentTime += seconds;
}

//progress-bar

$video.addEventListener("loadedmetadata", onLoadVideo);
$video.addEventListener("timeupdate", handleTimeUpdate);

function onLoadVideo(data) {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleProgress);

function handleProgress() {
  $video.currentTime = $progress.value;
}

const buttonPlayPause = document.getElementById('play-pause')
const buttonNext = document.getElementById('proximo')
const buttonPrevious = document.getElementById('anterior')
const chapterAudio = document.getElementById('audio-capitulo')
const chapterName = document.getElementById('capitulo')

const chapters = 10;
let isPlaying = 0;
let currentChapter = 1;

function playTrack() {
  chapterAudio.play();
  buttonPlayPause.classList.remove('bi-play-circle-fill');
  buttonPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseTrack() {
  chapterAudio.pause();
  buttonPlayPause.classList.add('bi-play-circle-fill');
  buttonPlayPause.classList.remove('bi-pause-circle-fill');
}

function changeTrackName() {
  chapterName.innerText = `Capítulo ${currentChapter}`
}

function nextTrack() {
  if (currentChapter === chapters) {
    currentChapter = 1;
  } else {
    currentChapter += 1;
  }

  chapterAudio.src = `./books/dom-casmurro/${currentChapter}.mp3`;
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

function previousTrack() {
  if (currentChapter === 1) {
    currentChapter = chapters;
  } else currentChapter -= 1;

  chapterAudio.src = `./books/dom-casmurro/${currentChapter}.mp3`;
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

function playOrPause() {
  if (isPlaying === 0) {
    playTrack();
    isPlaying = 1;
  } else {
    pauseTrack();
    isPlaying = 0;
  }
}

buttonPlayPause.addEventListener('click', playOrPause);

buttonNext.addEventListener('click', nextTrack);
buttonPrevious.addEventListener('click', previousTrack);
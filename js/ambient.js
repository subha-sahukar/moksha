let audio;
function toggleAmbience() {
  if (!audio) {
    audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_312faaaa3a.mp3?filename=temple-bell-ambient-loop-19670.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audio.play();
  } else {
    audio.pause();
    audio = null;
  }
}

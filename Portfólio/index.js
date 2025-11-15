function goEnsinoMedio() {
window.location.href = "EnsinoMedio/EnsinoMedio.html"
}   
function goTecnico() {
    window.location.href = "Tecnico/Tecnico.html"
}   
function goPPE() {
    window.location.href = "EnsinoMedio/EnsinoMedio.html"
}

const audio = document.getElementById('bg-music');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar');

function formatTime(s) {
  const m = Math.floor(s/60);
  const sec = Math.floor(s%60).toString().padStart(2,'0');
  return `${m}:${sec}`;
}

audio.addEventListener('loadedmetadata', () => {
});

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add('playing');
    playBtn.querySelector('.icon').textContent = '❚❚';
  } else {
    audio.pause();
    playBtn.classList.remove('playing');
    playBtn.querySelector('.icon').textContent = '►';
  }
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration || isNaN(audio.duration)) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = pct + '%';
});

progress.addEventListener('click', (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration && !isNaN(audio.duration)) {
    audio.currentTime = pos * audio.duration;
  }
});

audio.addEventListener('pause', () => playBtn.classList.remove('playing'));
audio.addEventListener('play', () => playBtn.classList.add('playing'));

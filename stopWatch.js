let elapsedTime = 0;
let timer = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startPauseBtn = document.getElementById("startPauseBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function startPause() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startPauseBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      elapsedTime += 1000;
      timeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
    isRunning = true;
    startPauseBtn.textContent = "Pause";
    stopBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

function stop() {
  clearInterval(timer);
  isRunning = false;
  startPauseBtn.textContent = "Start";
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  timeDisplay.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor(((ms / 1000) * 60) % 60);
  const hours = Math.floor(((ms / 1000) * 60 * 60) % 24);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

startPauseBtn.addEventListener("click", startPause);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

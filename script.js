// 🎵 Background Music Control 🎵
const audio = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPauseBtn");

let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    audio.play();
    playPauseBtn.textContent = "⏸ Pause Music";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️ Play Music";
  }
  isPlaying = !isPlaying;
}

// Event Listener for Button Click
playPauseBtn.addEventListener("click", toggleMusic);



const balloonContainer = document.querySelector(".balloon-container");

function createBalloonGroup() {
  if (!balloonContainer) {
    console.error("Balloon container is missing!");
    return;
  }

  const group = document.createElement("div");
  group.classList.add("balloon-group");
  group.style.left = `${Math.random() * 80 + 10}%`;

  for (let i = 0; i < 4; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const string = document.createElement("div");
    string.classList.add("string");
    balloon.appendChild(string);
    group.appendChild(balloon);
  }

  const bundle = document.createElement("div");
  bundle.classList.add("bundle");
  group.appendChild(bundle);

  balloonContainer.appendChild(group);

  // Float animation
  setTimeout(() => {
    group.style.transition = "transform 6s linear, opacity 6s ease-out";
    group.style.transform = "translateY(-120vh)";
    group.style.opacity = "0";
    setTimeout(() => group.remove(), 6000); // Remove after floating out
  }, 100);
}

// Keep generating balloons
setInterval(createBalloonGroup, 2000);




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
// Create the gift box
const giftBox = document.createElement("div");
giftBox.classList.add("gift-box");
giftBox.innerHTML = "🎁";
document.body.appendChild(giftBox);

// Create the "Click Me!" message
const clickMessage = document.createElement("div");
clickMessage.classList.add("click-message");
clickMessage.innerText = "Click Me!";
document.body.appendChild(clickMessage);

// Messages inside the gift
const messages = [
  "🍰youre a fu-ducking starboyy",
    "🎉 make a wish! 🎂",
    "💖 keep growing, and being the wonderful person you are!",
    "🌟I'll always be there for you, every birthday",
    "🌻 You make my world brighter just by being in it. 💛✨",
    "Another year, another excuse for me to annoy you for a lifetime. Lucky you! 😈💖",
    "youre the best and my favourite birthday boy!",
     "I hope you always remember me as the purple jacaranda girl-",
    "l'll keep falling for you, just like how I fell on you(ifykyk)",
    "I'll always be the harley quinn to your joker-",
    "Youu and mee belongg togetherr, like cold iced tea and warmm the weatherr",
   
    
];

// Position the "Click Me!" message near the gift box
function positionClickMessage() {
    const boxRect = giftBox.getBoundingClientRect();
    clickMessage.style.left = `${boxRect.left + boxRect.width / 2 - 40}px`; // Slightly to the left
    clickMessage.style.top = `${boxRect.top - 30}px`; // Just above the gift box
}
positionClickMessage();
window.addEventListener("resize", positionClickMessage);

// Click event to reveal message above the gift box
giftBox.addEventListener("click", () => {
    const message = document.createElement("div");
    message.classList.add("gift-message");
    message.innerText = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(message);

    // Position message ABOVE the gift box
    const boxRect = giftBox.getBoundingClientRect();
    const shiftLeft = 80; // Adjusted for better position
    message.style.left = `${boxRect.left + boxRect.width / 2 - shiftLeft}px`;
    message.style.top = `${boxRect.top - 50}px`; // Slightly higher

    // Hide "Click Me!" after clicking
    clickMessage.style.display = "none";

    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
        clickMessage.style.display = "block"; // Show "Click Me!" again
    }, 3000);
});

// Inject styles
const style = document.createElement("style");
style.innerHTML = `
    .gift-box {
        position: fixed;
        bottom: 20px;
        right: 45%; /* Slightly to the right */
        transform: translateX(50%); /* Center it better */
        font-size: 50px; /* Bigger size */
        cursor: pointer;
        animation: bounce 1s infinite;
    }
    .click-message {
        position: fixed;
        font-size: 16px;
        font-weight: bold;
        color: #ff69b4; /* Cute pink */
        background: rgba(255, 255, 255, 0.8);
        padding: 5px 10px;
        border-radius: 8px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        animation: fadeInOut 1.5s infinite;
    }
    .gift-message {
        position: absolute;
        background: #ffc0cb; /* Light baby pink */
        padding: 12px 18px;
        border-radius: 12px;
        font-size: 20px; /* Bigger font */
        font-weight: bold;
        color: #333;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
        transform: translateX(-50%);
        white-space: nowrap;
    }
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }
    @keyframes fadeInOut {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);





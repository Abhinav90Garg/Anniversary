const music = document.getElementById("bgMusic");
let playing = false;

// Auto-play after 2 seconds (muted → fade in)
window.addEventListener("load", () => {
    setTimeout(() => {
        music.volume = 0;
        music.play().then(() => {
            music.muted = false;
            fadeInMusic();
            playing = true;
        }).catch(() => {
            console.log("Autoplay blocked by browser");
        });
    }, 2000);
});

// Smooth volume fade in
function fadeInMusic() {
    let volume = 0;
    const interval = setInterval(() => {
        if (volume < 0.6) {
            volume += 0.02;
            music.volume = volume;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

// Music toggle button
function toggleMusic() {
    if (!playing) {
        music.play();
        playing = true;
    } else {
        music.pause();
        playing = false;
    }
}

// Floating light particles
const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 8 + Math.random() * 6 + "s";
    span.style.opacity = Math.random();
    particleContainer.appendChild(span);
}

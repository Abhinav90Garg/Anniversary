const music = document.getElementById("bgMusic");
const overlay = document.getElementById("startOverlay");
let playing = false;

// Start music ONLY after user tap (required on mobile)
overlay.addEventListener("click", () => {
    music.volume = 0;
    music.play().then(() => {
        fadeInMusic();
        playing = true;
        overlay.style.display = "none";
    });
});

// Smooth fade-in
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

// Floating particles
const particleContainer = document.querySelector(".particles");
for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 8 + Math.random() * 6 + "s";
    span.style.opacity = Math.random();
    particleContainer.appendChild(span);
}

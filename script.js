const tone = require("tone");

function preload() {
    song = loadSound("/pianito./sound/C Piano.mp3");
}

const btn = document.getElementById("keysWhiteC");
btn.addEventListener("click", () => {});

function sound() {
    console.log("hola");

    const audio = new Audio("/pianito/sound/PianoC.mp3");

    audio.play();
}

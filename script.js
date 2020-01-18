const theme = document.getElementById("theme");
const btnPlay = document.querySelector("button.btn-play");
const btnStop = document.querySelector("button.btn-stop");

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    if (key.getAttribute('data-key') === "109") stopTheme();
}

const play = () => {
    theme.play();
    theme.loop = true;
}

const stop = () => {
    theme.pause();
    theme.currentTime = 0;
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

btnPlay.addEventListener("click", play);
btnStop.addEventListener("click", stop);
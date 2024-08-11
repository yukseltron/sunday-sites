let currentAudio = null;
let toggle = false;

function toggleLamp() {
    toggle = !toggle;
    let lampSwitch = new Audio('audio/switch.mp3');
    lampSwitch.play();
}

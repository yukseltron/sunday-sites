let currentAudio = null;
let toggle = false;

function toggleLamp() {
    toggle = !toggle;
    let lampSwitch = new Audio('audio/switch.mp3');
    lampSwitch.play();

    const backgrounds = [
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzhtZG1nM25mcDR2YTU2cmgwaWNmZnZ0cXY4eWp6eHJ4c2YwYjFtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oI9JRgykipvxxWpSE/giphy.webp',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmlidm9pZXhhaWtvMTg1ZGVpZ25lanNyendodGdqeWg3bnp3MHdhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPhf02cXU9W4Le0/giphy.webp',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXk1bWxldTNvc281YjFzMHVncHp4bWlvbGliMTNtbnRtcHp2dmh4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A0vJ2GwINtFV2HdqaE/giphy.webp',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGk3ejlsdnZ3eGE5MGJxd3d4eDRldXo1M2ZsNmk0aGJ0d2Z0dm9jZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vow6Nb4oKkbuvRPKH5/giphy.webp',
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY21nbGJqZ2ZxY3ZtdTZkM2xnNjhkNW9zaWM0NmF2emhkMDN1YzV1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6EhNhU6RdILBeiGc/giphy.webp',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVyczVqNzJ0MWM1dTFrajJmNDN6ZmdlN29kNTRmdG5zNWR6NGFueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3rgXBs7oTxMoony7Hq/giphy.webp',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFtc2s4YndsZ3lpdW82dTJpb3gwOHV5Z3hiYmZxbG9tNnZyb252byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5yLgocbcB4wyDr1RpEA/giphy.webp',
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE5emVkbDFzbzhpdW8zMjEwN3p5ZHo0NmYzcjd2cXE0bWZqNWlidiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3V0CzINGXZOxKCu4/giphy.webp',
    ];

    const audioClips = [
        '1.mp3', // Corresponds to the first background
        '2.mp3', // Corresponds to the second background
        '3.mp3', // Corresponds to the third background
        '4.mp3', // Corresponds to the fourth background
        '5.mp3', // Corresponds to the fifth background
        '6.mp3', // Corresponds to the sixth background
        '7.mp3', // Corresponds to the seventh background
        '8.mp3', // Corresponds to the eighth background
    ];

    if (toggle) {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        const randomBackground = backgrounds[randomIndex];
        const randomAudio = audioClips[randomIndex];

        var lamp = document.querySelector('.week-39');
        lamp.style.backgroundImage = `url(${randomBackground})`;
        lamp.style.backgroundPosition = 'bottom';

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play the new audio
        currentAudio = new Audio('audio/' + randomAudio);
        currentAudio.play();
    } else {
        var lamp = document.querySelector('.week-39');
        lamp.style.backgroundImage = '';

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
}

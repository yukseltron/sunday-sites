document.addEventListener("DOMContentLoaded", () => {
  function createSpiralGalaxy(container, arms, armLength, armSpacing, armOffset) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const characters = ["✦", "✧", "✹", "✵", "✸", "✺"];
    const fontSizes = ["1rem", "1.25rem", "1.5rem", "1.75rem", "2rem",];

    for (let arm = 0; arm < arms; arm++) {
      for (let i = 0; i < armLength; i++) {
        const angle = 2 * Math.PI * i / armLength + (arm * 2 * Math.PI / arms) + armOffset * i;
        const radius = armSpacing * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const char = characters[Math.floor(Math.random() * characters.length)];
        const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

        const outerContainer = document.createElement('div');
        outerContainer.style.position = 'absolute';
        outerContainer.style.left = `${centerX}px`;
        outerContainer.style.top = `${centerY}px`;
        outerContainer.style.width = '0';
        outerContainer.style.height = '0';
        outerContainer.style.transformOrigin = `${-radius}px ${-radius}px`;

        const star = document.createElement('span');
        star.style.position = 'absolute';
        star.style.left = `${x - centerX}px`;
        star.style.top = `${y - centerY}px`;
        star.style.color = 'white';
        star.style.fontSize = fontSize;
        star.textContent = char;

        const rotationSpeed = (Math.random() * 5 + 5) + 's';  // Random speed between 5s and 10s
        const orbitSpeed = (Math.random() * 15 + 10) + 's';  // Random speed between 10s and 25s

        star.style.animation = `rotate ${rotationSpeed} linear infinite`;
        outerContainer.style.animation = `orbit ${orbitSpeed} linear infinite`;

        outerContainer.appendChild(star);
        container.appendChild(outerContainer);
      }
    }
  }

  const mainElement = document.querySelector('main');
  createSpiralGalaxy(mainElement, 5, 100, 5, 0.1);
});

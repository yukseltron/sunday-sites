function alternateBreathing() {
  const states = ['breathe in', 'hold', 'breathe out', 'hold'];
  let currentStateIndex = 0;

  function updateText() {
    const h1Element = document.querySelector('h1');
    h1Element.textContent = states[currentStateIndex];
  }

  function updateBalloon(num) {
    const balloon = document.querySelector('.balloon');
    balloon.style.width = `${balloon.style.width + num}px`;
    balloon.style.height = `${balloon.style.height + num}px`;
  }

  function balloonState(currentState) {
    if (currentState === 0) {
      return 100;
    } else if (currentState === 2) {
      return -100;
    } else {
      return 0;
    }
  }

  function nextState() {
    currentStateIndex = (currentStateIndex + 1) % states.length;
    updateText();
  }

  updateText();
  updateBalloon(balloonState(currentStateIndex));
  setInterval(nextState, 1000);
}

alternateBreathing();
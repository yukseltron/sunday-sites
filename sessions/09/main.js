function alternateBreathing() {
  const states = ['breathe in', 'hold', 'breathe out', 'hold'];
  let currentStateIndex = 0;

  function updateText() {
    const h1Element = document.querySelector('h1');
    h1Element.textContent = states[currentStateIndex];
  }


  function nextState() {
    currentStateIndex = (currentStateIndex + 1) % states.length;
    updateText();
  }

  updateText();
  setInterval(nextState, 4000);
}

alternateBreathing();
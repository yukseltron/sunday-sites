function snoozeEffect(element, zq) {
  const first = zq.shift();
  zq.push(first);
  element.innerText = zq.join("");
}

function startSnooze() {
 let title = document.getElementById("snooze");
  let startQ = ["Z", "z", "z", "z", "z"];

  setInterval(() => {
    snoozeEffect(title, startQ);
  }, 1000); 
}

startSnooze();
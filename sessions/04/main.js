function dreamEffect1() {
  let element = document.getElementById("dream-01");
  element.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url('https://preview.redd.it/pov-youre-in-a-horror-movie-but-its-set-in-echa-at-3-30-am-v0-kt4j998nudtc1.jpg?width=640&crop=smart&auto=webp&s=edac10ce62b78fbd9cb4b3e1a44222cee23771fe')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
  })
  element.addEventListener("mouseout", () => {
    document.body.style.backgroundImage = null;
  })
}

function dreamEffect2() {
  let element = document.getElementById("dream-02");
  element.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url('https://images.pond5.com/pov-walking-dark-scary-path-footage-068809242_iconl.jpeg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
  })
  element.addEventListener("mouseout", () => {
    document.body.style.backgroundImage = null;
  })
}

function dreamEffect3() {
  let element = document.getElementById("dream-03");
  element.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/84/5c/0b/845c0bd72f74a99b443bb25a9bb286f4.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
  })
  element.addEventListener("mouseout", () => {
    document.body.style.backgroundImage = null;
  })
}



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
dreamEffect1();
dreamEffect2();
dreamEffect3();
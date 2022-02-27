const words = ["start", "", "", "", "", ""];

const results = ["green", "gray", "yellow", "yellow", "green"];

// const item = five_letter_item.toUpperCase();

const wrapper = document.getElementById("app");

const wordle = ["", "", "", "", "", ""];

function render(name) {
  const item = name.toUpperCase();
  const line = document.createElement("div");
  line.className = "wordle-line";
  wrapper.appendChild(line);
  for (let i = 0; i < 5; i++) {
    const letterDiv = document.createElement("div");
    if (results[i] == "green") letterDiv.className = "square green";
    else if (results[i] == "yellow") {
      letterDiv.className = "square yellow";
    } else if (results[i] == "gray") {
      letterDiv.className = "square gray";
    }
    letterDiv.id = "square1";
    thing = item[i] || "";
    letterDiv.innerHTML = thing;
    line.appendChild(letterDiv);
  }
}

// on click
function Qclicked() {
  document.getElementById("Qkey");
}

function draw(value) {
  wrapper.innerHTML = "";
  value.forEach(function (item) {
    render(item);
  });
}

function onEnter(value) {
  wordle[0] += value;
  draw(wordle);
}

draw(wordle);

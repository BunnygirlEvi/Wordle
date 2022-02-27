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

function draw(value) {
  wrapper.innerHTML = "";
  value.forEach(function (item) {
    render(item);
  });
}

let activeLine = 0;

function onEnter(value) {
  // wordle[0] += value;
  wordle[activeLine] += value;
  draw(wordle);
}

draw(wordle);
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    activeLine++;
  }
});
createKeyboard();

function createKeyboard() {
  const lines = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  // append it to the keyboard div
  const keyboard = document.getElementById("keyboard");
  lines.forEach(function (words) {
    // create a div whith class line
    const line = document.createElement("div");
    line.className = "line";
    keyboard.appendChild(line);
    words.split("").forEach(function (ch) {
      // create a div with innerhtml q
      const word = document.createElement("div");
      word.className = "word";
      line.appendChild(word);
      // add click handler and add q to wordle
      word.innerHTML = ch.toUpperCase();
      word.addEventListener("click", function () {
        onEnter(ch);
      });
    });
  });
}

const results = ["green", "gray", "yellow", "yellow", "green"];

// const item = five_letter_item.toUpperCase();

const wrapper = document.getElementById("app");

const theWord = "clean";

const wordle = ["", "", "", "", "", ""];

function render(char, colors) {
  const item = char.toUpperCase();
  const line = document.createElement("div");
  line.className = "wordle-line";
  wrapper.appendChild(line);
  for (let i = 0; i < 5; i++) {
    const letterDiv = document.createElement("div");
    if (colors[i] == "green") letterDiv.className = "square green";
    else if (colors[i] == "yellow") {
      letterDiv.className = "square yellow";
    } else if (colors[i] == "gray") {
      letterDiv.className = "square gray";
    } else {
      letterDiv.className = "square";
    }
    thing = item[i] || "";
    letterDiv.innerHTML = thing;
    line.appendChild(letterDiv);
  }
}

function draw(value, result = []) {
  wrapper.innerHTML = "";
  value.forEach(function (item, index) {
    render(item, index === activeLine ? result[index] || [] : []);
  });
}

let activeLine = 0;

function onEnter(value) {
  // if wordle is less than 5 then append
  if (wordle[activeLine].length < 5) {
    wordle[activeLine] += value;
    draw(wordle);
    console.log(wordle);
  }
}

draw(wordle);
document.addEventListener("keyup", function (event) {
  // enter new line
  if (event.keyCode == 13) {
    const result = validate(wordle[activeLine]);
    if (!result) {
      return;
    }
    activeLine++;
    draw(wordle, result);
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    onEnter(event.key);
  } else if (event.keyCode === 8) {
    wordle[activeLine] = wordle[activeLine].slice(0, -1);
    draw(wordle);
  }
});

createKeyboard();

function validate(word) {
  console.log("validating " + word);
  // return false if length of the argument is not five
  if (word.length < 5) {
    console.log("less than 5. not accepted");
    return false;
  }
  return ["green", "gray", "yellow", "yellow", "green"];
}

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

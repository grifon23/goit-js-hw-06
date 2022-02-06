const inputEl = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputEl.addEventListener(
  "input",
  (e) => (text.style.fontSize = `${e.target.value}px`)
);

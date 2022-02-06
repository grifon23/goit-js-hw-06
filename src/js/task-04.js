const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);

const increment = () => counterValue.textContent++;

const decrement = () =>
  counterValue.textContent > 0 ? counterValue.textContent-- : null;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

let counterValue = document.querySelector("#value");
console.log("counterValue", counterValue);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const makeChangeColor = () => {
  let randColor = getRandomHexColor();
  document.body.style.background = randColor;
  spanColor.textContent = randColor;
};

changeColorBtn.addEventListener("click", makeChangeColor);

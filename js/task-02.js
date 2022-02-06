const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");

const listArr = [];
ingredients.forEach((el) => {
  const liItem = document.createElement("li");
  const text = (liItem.textContent = el);
  const addClass = liItem.classList.add("item");
  return listArr.push(liItem);
});
list.append(...listArr);

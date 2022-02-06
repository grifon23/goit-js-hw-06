const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listUl = document.querySelector(".gallery");
const newElList = images
  .map(
    (it) =>
      `<li class='list-item'><img src=${it.url} alt='${it.alt}' width=200 height=150></li>`
  )
  .join("");
// console.log("newElList", newElList);
listUl.insertAdjacentHTML("beforeend", newElList);
console.log("gallery", listUl);

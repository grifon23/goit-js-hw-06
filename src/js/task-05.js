const input = document.getElementById("name-input");
const titleValue = document.getElementById("name-output");

const onCangeValue = (e) =>
  e.currentTarget.value === ""
    ? (titleValue.textContent = "Anonimus")
    : (titleValue.textContent = e.currentTarget.value);

input.addEventListener("input", onCangeValue);

const inputEl = document.getElementById("validation-input");

const validLength = inputEl.getAttribute("data-length");

const onValidation = (val) => {
  val.currentTarget.value.length !== Number(validLength)
    ? (inputEl.classList = "invalid")
    : (inputEl.classList = "valid");
};
inputEl.addEventListener("blur", onValidation);

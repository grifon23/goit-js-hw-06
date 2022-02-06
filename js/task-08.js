const form = document.querySelector(".login-form");
console.log("form", form);

const submit = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    return console.log("user", user);
  }
};
form.addEventListener("submit", submit);

const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const formEl = document.querySelector(".form1");
const errorEl = document.querySelector(".error");
const btnEl = document.querySelector(".submit");

let count = 0;
formEl.addEventListener("submit", (e) => {
  count += 1;
  let errorMassege = [];

  if (
    passwordEl.value === "" ||
    passwordEl.value === null ||
    emailEl.value === "" ||
    emailEl.value === null
  ) {
    errorMassege.push("Fill in the blanks");
  }

  if (passwordEl.value.length < 6 && passwordEl.value.length > 0) {
    errorMassege.push("Password is weak");
  }

  if (count > 20) {
    errorMassege = ["you have clicked too many times"];
    btnEl.classList.add("stop");
    btnEl.value = "STOP";
  }

  if (errorMassege.length > 0) {
    e.preventDefault();
    errorEl.innerHTML = errorMassege.join("/");
    errorEl.classList.add("caught-error");
  }
});

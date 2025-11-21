const submitBtn = document.getElementById("submitBtn");
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName() && validateEmail() && validatePass()) {
    alert("Form submitted successfully!");
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameErr.classList.remove("err");
    nameErr.previousElementSibling.classList.add("fa-xmark");
    nameErr.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.previousElementSibling.classList.add("fa-xmark");
    nameErr.innerHTML = "Write Full Name";
    return false;
  }

  nameErr.classList.add("err");

  nameErr.previousElementSibling.classList.remove("fa-xmark");
  nameErr.previousElementSibling.style.color = " green";

  nameErr.previousElementSibling.classList.add("fa-check");

  return true;
}
function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailErr.classList.remove("err");
    emailErr.previousElementSibling.classList.add("fa-xmark");
    emailErr.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailErr.previousElementSibling.classList.add("fa-xmark");
    emailErr.innerHTML = "Enter a valid email address";
    return false;
  }

  emailErr.classList.add("err");

  emailErr.previousElementSibling.classList.remove("fa-xmark");
  emailErr.previousElementSibling.style.color = " green";

  emailErr.previousElementSibling.classList.add("fa-check");

  return true;
}
function validatePass() {
  let pass = document.getElementById("password").value;

  if (pass.length == 0) {
    passErr.classList.remove("err");
    passErr.previousElementSibling.classList.add("fa-xmark");
    passErr.innerHTML = "Password is required";
    return false;
  }

  if (
    !pass.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passErr.previousElementSibling.classList.add("fa-xmark");
    passErr.innerHTML =
      "Password must be 8-30 characters, include uppercase, lowercase, number & special character";
    return false;
  }

  passErr.classList.add("err");

  passErr.previousElementSibling.classList.remove("fa-xmark");
  passErr.previousElementSibling.style.color = " green";

  passErr.previousElementSibling.classList.add("fa-check");

  return true;
}

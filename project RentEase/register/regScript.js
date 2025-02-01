const username = document.querySelector("#uname");
const email = document.querySelector("#email");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const birthDate = document.querySelector("#birthDate");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordError = document.querySelector("#passwordError");
const submit = document.querySelector("#submit");

class userinfo {
  constructor(_username, _email, _firstName, _lastName, _birthDate, _password) {
    this.username = _username;
    this.email = _email;
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.birthDate = _birthDate;
    this.password = _password;
    this.fullName = _firstName + " " + _lastName;
  }
}

submit.addEventListener("click", (e) => {
  //oprim redirectul default!
  e.preventDefault();
  //incarcam obiectul cu info de UI
  let user = new userinfo(
    username.value,
    email.value,
    firstName.value,
    lastName.value,
    birthDate.value,
    password.value
  );

  if (!validateInput(user, passwordError)) {
    //citim localStorage si salvam obiectul in local storage;
    let ls = getFromLs("Users");
    ls.push(user);
    saveToLs("Users", ls);
    //redirectionam catre pagina de login
    window.location.href = "../login/login.html";
  }
});

function validateInput(data, error) {
  if (
    data.username == "" &&
    data.email == "" &&
    data.firstName == "" &&
    data.lastName == "" &&
    data.birthDate == "" &&
    data.password == ""
  ) {
    error.innerHTML += "<p>Completati toate spatiile goale!</p>";
    return true;
  }
  if (data.username.length < 3) {
    error.innerHTML += "<p>Username trebuie sa contina min 3 caractere</p>";
    return true;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(data.email)) {
    console.log("invalid email address");
    return true;
  }

  return false;
}

function getFromLs(storageName) {
  let ls = JSON.parse(localStorage.getItem(storageName)) || [];
  return ls;
}

function saveToLs(storageName, data) {
  localStorage.setItem(storageName, JSON.stringify(data));
}

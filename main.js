const input = document.getElementById("password");
const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 12;

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
  copyIcon.style.display = "block";
  doneIcon.style.display = "none";
}

const copyIcon = document.querySelector(".copy");
const doneIcon = document.querySelector(".done");

function copy() {
  if (input.value !== "") {
    input.select();
    navigator.clipboard.writeText(input.value);
    copyIcon.style.display = "none";
    doneIcon.style.display = "block";
  }
}

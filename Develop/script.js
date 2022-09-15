// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//click generate run function to confirm character types
function charType() {

  let passLength = prompt("enter password length between 8 and 128 characters")
  let incLower = confirm("include lowercase letters?")
  let incUpper = confirm("include uppercase letters?")
  let incNumbers = confirm("include numbers?")
  let incChar = confirm("include special characters?")
}

//generator functions

//function returns lowercase letter from character code chart 
//by generating whole number value between 0 and 26 
//then adding 97 to get it into the range of lowercase letters based on character code chart


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//same thing but add 65 to get into range of uppercase letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//same thing but the span is only 10 ie 0-9 and starts at 48
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//select random position on string of symbols
function getRandomSymbol() {
  const symbols = " !#$%&'()*+,-./:;<=>?@[^_`{|}~ "
  return symbols[Math.floor(Math.random() * symbols.length)];
}
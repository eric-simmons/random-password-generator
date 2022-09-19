//select from DOM //add click event listenener

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", generatePassword);
var charStrings = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: " \"!#$%&\\'()*+,-./:;<=>?@[]^_`{|}~"
};

function generatePassword() {
    var password = "";
    var options = [];

    //prompt and booleans for conditionals
    var passLength = prompt("enter password length between 8 and 128 characters")

    if (passLength < 8) {
        alert("Password must be at least 8 characters!")
        return;
    };

    if (passLength > 128) {
        alert("Password must be less than 128 characters!")
        return;
    };

    var lower = confirm("Include lowercase letters?")
    var upper = confirm("Include uppercase letters?")
    var number = confirm("Include numbers?")
    var symbol = confirm("Include special characters?")


    //add selected characters into options

    if (lower === true) {
        options.push(charStrings.lower)
    };
    if (upper === true) {
        options.push(charStrings.upper)
    };
    if (number === true) {
        options.push(charStrings.number)
    };
    if (symbol === true) {
        options.push(charStrings.symbol)
    };

    if (lower === false && upper === false && number === false && symbol === false) {

        alert("You must select at least one character type!");
        return;
    };


    //create string from options and put it into possibleCharacters
    var possibleCharacters = options.toString();

    //add random characters selected from possibleCharacters until passLength is reached
    for (var i = 0; i < passLength; i++) {
        password += possibleCharacters[(Math.floor(Math.random() * possibleCharacters.length))];
        console.log(password);

        //print result in textarea
        passwordText.value = password;
    };
}


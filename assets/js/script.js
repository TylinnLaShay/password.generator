// establish user variables
var characterAmount = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8-128 characters."));

var upperCase = confirm("Would you like to include an uppercase letter?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include special characters?");
var generateBtn = document.querySelector("#generate");

while (!upperCase && !numbers && !symbols) {
  alert("You must select at leastv one character type!");
  upperCase = confirm("Would you like to include an uppercase letter?");
  numbers = confirm("Would you like to include numbers?");
  symbols = confirm("Would you like to include special characters?")
}

var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var addNumbers = window.prompt('Include at least one number? Please enter yes or no below.')

    if (addNumbers === 'yes' || addNumbers === 'YES')
    if (addNumbers === 'no' || addNumbers === 'NO')
      console.log(

      )
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

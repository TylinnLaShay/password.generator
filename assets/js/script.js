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


// create password with charcodes
function createPassword(characterAmount, upperCase, numbers, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (upperCase) charCodes = charCodes.concat(UPPER_CASE_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOL_CASE_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')

}

function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array

}

//CONST FOR ARRAY
const LOWERCASE_CHAR_CODES = arrayLowToHigh(97, 122)
const UPPER_CASE_CHAR_CODES = arrayLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayLowToHigh(48,57)
const SYMBOL_CASE_CHAR_CODES = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58,64)
).concat(
  arrayLowToHigh(91,96)
).concat(
  arrayLowToHigh(123, 126)
)

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

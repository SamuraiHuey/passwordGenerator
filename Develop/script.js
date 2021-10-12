// Assignment code here

//Objects to construct the password
var allChar = {
  specialCharacters: "!@#$%^&*()",
  upperCase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
  lowerCase: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890"
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Collecting user parameters
function generatePassword() {
  var passwordLength = parseInt(window.prompt("Between 8 and 128 characters, how many characters would you like your password to contain?"))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    alert("Your password length is invalid, please pick a password between 8 and 128 characters.")
    generatePassword();
  }
  var specialIn = window.confirm ("Would you like special characters");
  var upperIn = window.confirm ("Would you like Uppercase Letters?");
  var lowerIn = window.confirm ("Would you like lower case letters");
  var numbersIn = window.confirm ("Would you like numbers?");

  var passwordOptions = {
    length: passwordLength,
    special: specialIn,
    upper: upperIn,
    lower: lowerIn,
    numbers: numbersIn
  }
  var password=""
  if (passwordOptions.special === true){
    password+= allChar.specialCharacters
  }
  if (passwordOptions.upper === true){
    password+= allChar.upperCase
  }
  if (passwordOptions.lower === true){
    password+= allChar.lowerCase
  }
  if (passwordOptions.numbers === true){
    password+= allChar.numbers
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

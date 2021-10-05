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
    alert ("Your password length is invalid, please pick a password between 8 and 128 characters.")
    generatePassword();
  }
  // if (typeOf (passwordLength) = "string"){
  //   console.log("Hello")
  // }
  console.log(passwordLength)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

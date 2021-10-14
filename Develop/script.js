// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//variables to construct the password
var specialCharacters = "!@#$%^&*()";
var upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
var lowerCase  = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
//empty string to list the characters for the password
var passwordCharacters = "";



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Collecting user parameters
function generatePassword() {

  var result = "";

  //prompt user for password length
  var length = prompt("How many characters would you like in your password (Must be between 8 and 128)")

  //isNaN is the result if anything that is not a number in this field
  if(isNaN(length)){
    alert("Please input a valid number (between 8 and 128)")
    //restart process
    return generatePassword()
  }
  
  //do the same for invalid lengths
  if(length<8 || length>128){
    alert("Please input a valid number (between 8 and 128")

    return generatePassword()
  }

  var generatePassword = pickCharacters();
  function pickCharacters(){
      //Var coming from confirms so user must choose which characters types to use
      var special = confirm ("Would you like special characters");
      var upper = confirm ("Would you like Uppercase Letters?");
      var lower = confirm ("Would you like lower case letters");
      var numbers = confirm ("Would you like numbers?");

      if (special){
        passwordCharacters+= specialCharacters
      }else{

      }
      if (upper){
        passwordCharacters+= upperCase
      }else{

      }
      if (lower){
        passwordCharacters+= lowerCase
      }else{

      }
      if (numbers){
        passwordCharacters+= numbers
      }else{
        
      }

      //if user selects no characters, must be sent back to do so
      if(!special&&!upper&&!lower&&!numbers){
        alert("Password requires at least one character type!")

        return pickCharacters();
      }
    }

  //Use the picked characters to randomly generate a password with selected character length
  for (var i = 0; i<length; i++){
    result += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  return result;
  console.log(result);
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
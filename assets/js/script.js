

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
enter = parseInt(prompt("how many characters would you like in your password? choose between 8 and 128"));
// if statement

if (enter) {
  alert("password");

} else if (enter < 8 || enter > 128) {

  enter = parseInt(prompt("You must Choose between 8 and 128"));

  
  } else {
    confirmNumber = confirm("will your password contain numbers?");
    confirmSpecial = confirm("will your password contain special characters?");
    confirmUppercase = confirm("will your password contain uppercase letters?");
    confirmLowercase = confirm("will your password contain lowercase letters?");

  };
 


  //1. prompt the user ot password criteria
   // a. password length 8 < 128
  //  b. lowercase, uppercase, numbers, special characters 

  
  //2. validate input.

  //3. Generate password based on

  //4. display password for the page
   return "password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

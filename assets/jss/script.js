// Assignment code here

// 1st window LENGTH
  var generatePassword = function () {
    
  var promptLength= window.prompt("Choose a password length between 8 and 128 characters.");
    if (promptLength >= 8 && promptLength <= 128) {
      passwordLength = parseInt(promptLength);
      passwordLowerCasePrompt();
    }
    else
    {
      window.alert("Please enter an appropriate value.");
      return generatePassword();
    }
};
// 2nd window LOWERCASE
var passwordLowerCasePrompt = function() {
  var promptLowerCase = window.prompt("Would you like to include LOWERCASE letters? YES or NO");
      promptLowerCase = promptLowerCase.toLowerCase();

    if (promptLowerCase == "no" || promptLowerCase == null ) {
      useLowerCase = false;
      passwordUpperCasePrompt ();
    }
    if (promptLowerCase == "yes") {
      useLowerCase = true;
      passwordUpperCasePrompt ();
    }
    else
    {
      window.alert("Please enter an appropriate value.");
      return passwordLowerCasePrompt();
    }
};
// 3rd window UPPERCASE
var passwordUpperCasePrompt = function() {
  var promptUpperCase = window.prompt("Would you like to include UPPERCASE letters? YES or NO");
      promptUpperCase = promptUpperCase.toLowerCase();
 
      if (promptUpperCase == "no" || promptUpperCase == null ) {
        useUpperCase = false;
        passwordNumberPrompt ();
      }
      if (promptUpperCase == "yes") {
      useUpperCase = true;
       passwordNumberPrompt ();
      }
      else
      {
      window.alert("Please enter an appropriate value.");
      return passwordUpperCasePrompt();
      }
  };
// 4th window NUMBERS
var passwordNumberPrompt = function() {
  var promptNumbers= window.prompt("Would you like to include NUMBERS? YES or NO");
      promptNumbers = promptNumbers.toLowerCase();

      if (promptNumbers == "no" || promptNumbers == null ) {
        useNumbers = false;
        passwordSpecialPrompt ();
      }
      if (promptNumbers == "yes") {
      useNumbers = true;
       passwordSpecialPrompt ();
      }
      else
      {
      window.alert("Please enter an appropriate value.");
      return passwordNumberPrompt();
      }
};
// 5th window SPECIAL CHARACTERS
var passwordSpecialPrompt = function() {
  var promptSpecialChar= window.prompt("Would you like to include SPECIAL characters? YES or N0");
    promptSpecialChar = promptSpecialChar.toLowerCase();

    if (promptSpecialChar == "no" || promptSpecialChar == null ) {
      useSpecialChar = false;
      // Next Function
    }
    if (promptSpecialChar == "yes") {
      useSpecialChar = true;
      // Next Function
    }
    else
    {
    window.alert("Please enter an appropriate value.");
    return passwordSpecialPrompt();
    }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
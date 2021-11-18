// Assignment code here

 //---------------------------------------------------------------------------------
// 1st window LENGTH
var generatePassword = function () {
  // reset password
  password = "";
  // password length prompt, only continue other prompts if length between 9 and 128 characters
  var passwordLengthPrompt = function () {
    var promptLength= window.prompt("Choose a password length between 8 and 128 characters.");
    if (promptLength >= 8 && promptLength <= 128) {
      passwordLength = parseInt(promptLength);
      return passwordLowerCasePrompt();
    }
    // exit password generator promps if user clicks "cancel"
    if (promptLength == null){
      return false;
    }
    else
    {
      window.alert("Please enter an appropriate value.");
      return passwordLengthPrompt();
    }
  };
  //---------------------------------------------------------------------------------
  // 2nd window LOWERCASE
  var passwordLowerCasePrompt = function() {
    // prompt window
    var promptLowerCase = window.prompt("Would you like to include LOWERCASE letters? YES or NO");
    // exit prompt and act as a "no choice" if user clicks cancel
    if (promptLowerCase == null) {
      useLowerCase = [];
      return passwordUpperCasePrompt();
    }
    else {
    // change text to lower case for following conditional statements
    promptLowerCase = promptLowerCase.toLowerCase();
    }
    // if answered no, do not use characters, by emptying array
    if (promptLowerCase === "no") {
      useLowerCase = [];
    }
    // if yes use character array
    else if (promptLowerCase === "yes") {
      useLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }
    // all other entries, alert user and retry prompt
    else {
      window.alert("Please enter an appropriate value.");
      return passwordLowerCasePrompt();
    }
    return passwordUpperCasePrompt();
  };
  //---------------------------------------------------------------------------------
  // 3rd window UPPERCASE
  var passwordUpperCasePrompt = function() {
    // prompt window
    var promptUpperCase = window.prompt("Would you like to include UPPERCASE letters? YES or NO");
    // exit prompt and act as a "no choice" if user clicks cancel
    if (promptUpperCase === null) {
      useUpperCase = [];
      return passwordNumbersPrompt();
    }
    else {
    // change text to lower case for following conditional statements
    promptUpperCase = promptUpperCase.toLowerCase();
    }
    // if answered no, do not use characters, by emptying array
    if (promptUpperCase === "no") {
      useUpperCase = [];
    }
    // if yes use character array
    else if (promptUpperCase === "yes") {
      useUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }
    // all other entries, alert user and retry prompt
    else {
      window.alert("Please enter an appropriate value.");
      return passwordUpperCasePrompt();
    }
    return passwordNumbersPrompt();
  };
  //---------------------------------------------------------------------------------
  // 4th window NUMBERS
  var passwordNumbersPrompt = function() {
    // prompt window
    var promptNumbers = window.prompt("Would you like to include NUMBERS? YES or NO");
    // exit prompt and act as a "no choice" if user clicks cancel
    if (promptNumbers === null) {
      useNumbers = [];
      return passwordSpecialCharPrompt();
    }
    else {
    // change text to lower case for following conditional statements
    promptNumbers = promptNumbers.toLowerCase();
    }
    // if answered no, do not use characters, by emptying array
    if (promptNumbers === "no") {
      useNumbers = [];
    }
    // if yes use character array
    else if (promptNumbers === "yes") {
      useNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    }
    // all other entries, alert user and retry prompt
    else {
      window.alert("Please enter an appropriate value.");
      return passwordNumbersPrompt();
    }
    return passwordSpecialCharPrompt();
  };
   //---------------------------------------------------------------------------------
  // 5th window SPECIAL CHARACTERS
  var passwordSpecialCharPrompt = function() {
    // prompt window
    var promptSpecialChar = window.prompt("Would you like to include SPECIAL CHARACTERS? YES or NO");
    // exit prompt and act as a "no choice" if user clicks cancel
    if (promptSpecialChar === null) {
      useSpecialChar = [];
      return parametersFunction();
    }
    else {
    // change text to lower case for following conditional statements
    promptSpecialChar = promptSpecialChar.toLowerCase();
    }
    // if answered no, do not use characters, by emptying array
    if (promptSpecialChar === "no") {
      useSpecialChar = [];
    }
    // if yes use character array
    else if (promptSpecialChar === "yes") {
      useSpecialChar = ['!','@','#','$','%','&','*','(',')','_','+','-','=','[',']','|',',','.','/','?','>','<'];
    }
    // all other entries, alert user and retry prompt
    else {
      window.alert("Please enter an appropriate value.");
      return passwordSpecialCharPrompt();
    }
    return parametersFunction();
  };
  return passwordLengthPrompt();
};
//---------------------------------------------------------------------------------
// function to determine the password parameters
var parametersFunction = function (){
  debugger;
  // combines the chosen prompt criteria
  var parameterArray = [];
  var passwordParameters = parameterArray.concat(useUpperCase, useLowerCase, useNumbers, useSpecialChar);

  // loop which controls adding characters to the password based on password length
  for (i = 0; i < passwordLength; i++) {
    var charPicker = Math.floor(Math.random() * (passwordParameters.length + 1));
    // if no password parameters were chosen print this message
    if (passwordParameters.length == 0){
      password = "Please choose at least 1 password parameter";
      i = passwordLength;
    }
    // adjustement so "undefined" is not added as a possible character choice
    // undo increment increase if "undefined" is selected
    else if (charPicker == passwordParameters.length) {
      i--;
    }
    // add characters to password
    else {
    password += passwordParameters[charPicker];
    }
  }
  return writePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
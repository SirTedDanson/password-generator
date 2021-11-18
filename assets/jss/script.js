// Assignment code here

var useLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var useUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var useNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var useSpecialChar = ['!','@','#','$','%','&','*','(',')','_','+','-','=','[',']','|',',','.','/','?','>','<'];
var password = "";

 //---------------------------------------------------------------------------------
// 1st window LENGTH
var generatePassword = function () {
  password = "";

  var passwordLengthPrompt = function () {
    var promptLength= window.prompt("Choose a password length between 8 and 128 characters.");
    if (promptLength >= 8 && promptLength <= 128) {
      passwordLength = parseInt(promptLength);
      return passwordLowerCasePrompt();
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
   var promptLowerCase = window.prompt("Would you like to include LOWERCASE letters? YES or NO");
      
    // Conditional Recursive Function Call
    if (promptLowerCase === "" || promptLowerCase === null) {
      window.alert("Please enter an appropriate value.");
    // use return to call it again and stop the rest of this function from running
    return passwordLowerCasePrompt();
    }
    
    promptLowerCase = promptLowerCase.toLowerCase();

    if (promptLowerCase === "yes") {
     useLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    } else {
      useLowerCase = [];
    }
    return passwordUpperCasePrompt();
  };
  //---------------------------------------------------------------------------------
  // 3rd window UPPERCASE
  var passwordUpperCasePrompt = function() {
    var promptUpperCase = window.prompt("Would you like to include UPPERCASE letters? YES or NO");
      

    // Conditional Recursive Function Call
    if (promptUpperCase === "" || promptUpperCase === null) {
      window.alert("Please enter an appropriate value.");
    // use return to call it again and stop the rest of this function from running
    return passwordUpperCasePrompt();
    }
    
    promptUpperCase = promptUpperCase.toLowerCase();

    if (promptUpperCase === "yes") {
      useUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    } else {
      useUpperCase = [];
    }
    return passwordNumbersPrompt();
  };
  //---------------------------------------------------------------------------------
  // 4th window NUMBERS
  var passwordNumbersPrompt = function() {
    var promptNumbers = window.prompt("Would you like to include Numbers letters? YES or NO");
      
    // Conditional Recursive Function Call
    if (promptNumbers === "" || promptNumbers === null) {
      window.alert("Please enter an appropriate value.");
    // use return to call it again and stop the rest of this function from running
      return passwordNumbersPrompt();
    }
      
    promptNumbers = promptNumbers.toLowerCase();

    if (promptNumbers === "yes") {
      useNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    } else {
      useNumbers = [];
    }
    return passwordSpecialCharPrompt();
  };
   //---------------------------------------------------------------------------------
  // 5th window SPECIAL CHARACTERS
  var passwordSpecialCharPrompt = function() {
    var promptSpecialChar = window.prompt("Would you like to include SpecialChar letters? YES or NO");
  
    // Conditional Recursive Function Call
    if (promptSpecialChar === "" || promptSpecialChar === null) {
      window.alert("Please enter an appropriate value.");
    // use return to call it again and stop the rest of this function from running
      return passwordSpecialCharPrompt();
    }

    promptSpecialChar = promptSpecialChar.toLowerCase();

    if (promptSpecialChar === "yes") {
      useSpecialChar = ['!','@','#','$','%','&','*','(',')','_','+','-','=','[',']','|',',','.','/','?','>','<'];
    } else {
      useSpecialChar = [];
    }
    return parametersFunction();
  };
  passwordLengthPrompt();
};

  var parametersFunction = function (){
    debugger;
    var parameterArray = [];
    var passwordParameters = parameterArray.concat(useUpperCase,useLowerCase, useNumbers, useSpecialChar);

    for (i = 0; i < passwordLength; i++) {
        var arrayPicker = Math.floor(Math.random() * (passwordParameters.length + 1));
        password += passwordParameters[arrayPicker];
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
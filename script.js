// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = [];
var numberOfCharacters = 8;
var digitsRequest = false;
var lowerCaseRequest = false;
var upperCaseRequest = false;
var specialCharRequest = false;
var passwordArray = [];
var digits = ["1","2","3","4","5","6","7","8","9","0"];
var spCharacters = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];
var alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = passwordArray.toString('');
  passwordText.value = password;
  passwordText = passwordText.toString();
}

function generatePassword() {
alert ("Please set the following parameters");
var howLong = prompt("Please enter desired password length", "minimum 8 characters");
if (howLong != null){
  if (!isNaN(howLong)){
    if (howLong > 7){
      if (howLong < 129){
        numberOfCharacters = howLong;
        alert("You entered " + howLong + " characters");
      } else {
        alert("Maximum length is 128!")
        return;
      }
    } else {
      alert("Minimum length is 8!")
      return;
    }
  } else {
    alert("You must enter a number!")
    return;
    } 
  } 

// build the character set from the user input fields using true/false
  var digitsConfirm = confirm("Would you like numbers?");
    if(digitsConfirm) {
      digitsRequest = digitsConfirm;
      if (digitsRequest) {
        charset = digits.concat(charset);
      }
    }

  var lowerCaseConfirm = confirm("Would you like lower case letters?");
    if(lowerCaseConfirm) {
      lowerCaseRequest = lowerCaseConfirm;
      if (lowerCaseRequest) {
        charset = alphabetLowerCase.concat(charset);
      } 
    }

  var upperCaseConfirm = confirm("Would you like upper case letters?");
    if(upperCaseConfirm) {
      upperCaseRequest = upperCaseConfirm;
      if (upperCaseRequest) {
        charset = alphabetUpperCase.concat(charset);
    } 
  }

  var specialCharConfirm = confirm("Would you like special characters?");
    if(specialCharConfirm) {
      specialCharRequest = specialCharConfirm;
      if (specialCharRequest) {
        charset = spCharacters.concat(charset);
      } 
    }

// validate that at least one character set was selected
if (digitsRequest || lowerCaseRequest || upperCaseRequest || specialCharRequest) {
  chooseArrayValue();
  } else {
  console.log("You must pick a set!")
  }
// iteration process
  function chooseArrayValue() { 
    var target = 0;
    var value = [];
// generating the random values for selecting from the array
    for(i = 0; i <= (numberOfCharacters -1); i++){
      generateTarget();
      function generateTarget() {
        target = Math.floor(Math.random() * 100);
        if (charset.length < target) {
          generateTarget();
         } 
        }  //validating the array and creating the password array
        if(charset.length > target){ 
        value = (charset[target]);  
        passwordArray = value.concat(passwordArray);  
        }
      }    
    }
  
}
  


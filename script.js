// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = [];
var passwordArray = [];
var numberOfCharacters = 8;
var digitsRequest = false;
var lowerCaseRequest = false;
var upperCaseRequest = false;
var specialCharRequest = false;
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
var howLong = prompt("Please enter desired password length minimum 8 characters", "8");
if (howLong < 8 || howLong > 128 || isNaN(howLong) === true ) {
  alert("Please try again");
  return;
} else {
  numberOfCharacters = howLong;
  alert("You entered " + howLong);
}

// build the character set from the user input fields using true/false
  var digitsConfirm = confirm("Would you like numbers?");
    if(digitsConfirm) {
      charset = digits.concat(charset);
      }
    
  var lowerCaseConfirm = confirm("Would you like lower case letters?");
    if(lowerCaseConfirm) {
       charset = alphabetLowerCase.concat(charset);
      } 
    
  var upperCaseConfirm = confirm("Would you like upper case letters?");
    if(upperCaseConfirm) {
      charset = alphabetUpperCase.concat(charset);
    } 
  
  var specialCharConfirm = confirm("Would you like special characters?");
    if(specialCharConfirm) {
       charset = spCharacters.concat(charset);
      } 
     
      if (charset.length < 1) {
      alert ("You must select a type of character");
      return;

      } else {
      chooseArrayValue();
      }
    }
  
  function chooseArrayValue() { 
    var target = 0;
    var value = [];
// generating the random values for selecting from the array
    for(i = 0; i <= (numberOfCharacters -1); i++){
      generateTarget();
      function generateTarget() {
        target = Math.floor(Math.random() * charset.length);
        value = (charset[target]);  
        passwordArray = value.concat(passwordArray);  
        }
      }    
    }
  

  


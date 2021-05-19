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
// build the charset array from which the password is randomly selected
if (digitsRequest) {
  charset = digits.concat(charset);
}

if (lowerCaseRequest) {
  charset = alphabetLowerCase.concat(charset);
} 

if (upperCaseRequest) {
  charset = alphabetUpperCase.concat(charset);
} 
  
if (specialCharRequest) {
  charset = spCharacters.concat(charset);
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = passwordArray.toString('');
  passwordText.value = password;
  passwordText = passwordText.toString();
}

function generatePassword() {
// iteration process for generating the password array
// validates input as containing at least one set of target characters for the password

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

// user inputs the parameters
//    input digits request
//    store digits request
//    etcetera
// parameters are validated
if (digitsRequest || lowerCaseRequest || upperCaseRequest || specialCharRequest) {
  chooseArrayValue();
  } else {
  console.log("You must pick a set!")
  }
// validated input proceeds to the iteration process
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
  


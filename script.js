// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = [];
var numberOfCharacters = 8;
var digitsRequest = true;
var lowerCaseRequest = true;
var upperCaseRequest = true;
var specialCharRequest = true;
var passwordArray = [];
var digits = ["1","2","3","4","5","6","7","8","9","0"];
var spCharacters = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];
var alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// build the charset array from which the password is randomly selected
if (digitsRequest = true){
  charset = digits.concat(charset);
}

if (lowerCaseRequest = true) {
  charset = alphabetLowerCase.concat(charset);
} 

if (upperCaseRequest = true) {
  charset = alphabetUpperCase.concat(charset);
} 
  
if (specialCharRequest = true) {
  charset = spCharacters.concat(charset);
} 
writePassword();
password = passwordArray.toString('');
console.log(password);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
// iteration process for generating the password array
// validates input as containing at least one set of target characters for the password
if (digitsRequest || lowerCaseRequest || upperCaseRequest || specialCharRequest) {
  chooseArrayValue();
    
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
        }  //validating the array
        if(charset.length > target) 
        value = (charset[target]);
        passwordArray = value.concat(passwordArray);  
        console.log(passwordArray);
      }
    }    
  }
}
  


// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = [];
var numberOfCharacters = 8;
var digitsRequest = true;
var lowerCaseRequest = true;
var upperCaseRequest = true;
var specialCharRequest = true;
var passwordArray = [];
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// these arrays are used to build a target from which a character to add to a new password array
// which will later be turned into a string for the user once the iteration process is complete
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

generatePassword();

// iteration process for generating the password array
function generatePassword() {

// validates input as containing at least one set of target characters for the password
  if (digitsRequest) {

// validated input proceeds to the iteration process
      function chooseArrayValue() { 
        
        var target = 0;
        var value = [];
        console.log(charset.length);

          function generateTarget() {
            target = (Math.random * 100);
            console.log(target);
              if (charset.length < target) {
              generateTarget();
              } else {
                value = (charset[target]);
                passwordArray = value.concat(passwordArray);
              }
             } 
            

            console.log(passwordArray);
           }
          }
        } 
   
  


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var charset = [];
var numberOfCharacters = 8;
var digitsRequested = true;
var lowerCaseRequest = true;
var upperCaseRequest = true;
var specialCharRequest = true;

var digits = ["1","2","3","4","5","6","7","8","9","0"];
var spCharacters = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];
var alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
if (digitsRequested = true){
  charset = digits.concat(charset);
  console.log(charset);
}

if (lowerCaseRequest = true) {
  charset = alphabetLowerCase.concat(charset);
  console.log(charset);
} 

if (upperCaseRequest = true) {
  charset = alphabetUpperCase.concat(charset);
  console.log(charset);
} 
  
if (specialCharRequest = true) {
  charset = spCharacters.concat(charset);
  console.log(charset);
} 

function generatePassword() {
for(var i = 0; i <= numberOfCharacters; i++){

  }
}


 



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



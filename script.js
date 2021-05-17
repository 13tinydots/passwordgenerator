// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var numberOfCharacters = 8;
var lowerCaseRequest = "true";
var upperCaseRequest = "true";
var specialCharRequest = "true";
var charset = [""];

function generatePassword() {
  const digits = ["1","2","3","4","5","6","7","8","9","0"];
  const spCharacters = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];
  const alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  

  if (lowerCaseRequest = "true") {
      charset.concat (alphabetLowerCase);
      
      } 

  if (upperCaseRequest = "true") {
      charset.concat (alphabetUpperCase);
      } 
  
  if (specialCharRequest = "true") {
      charset.concat (spCharacters);
      } 
    console.log(charset);
  }
 
  generatePassword();



 



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



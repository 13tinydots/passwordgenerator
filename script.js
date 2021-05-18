// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//need to create user input
// setting global variables to execute outside of button click so as to not repeat 
// concatenation on the target array more than once
var charset = [];
var numberOfCharacters = 8;
var digitsRequest = true;
var lowerCaseRequest = true;
var upperCaseRequest = true;
var specialCharRequest = true;

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

// iteration process for generating the password array
function generatePassword() {

// validates input as containing at least one set of target characters for the password
  if(digitsRequest || lowerCaseRequest || upperCaseRequest || specialCharRequest){

// validated input proceeds to the iteration process
      
      function chooseArrayValue() { 
        for(var i = 0; i <= numberOfCharacters; i++){
        var length = (charset.length);
        var target = 0;
        console.log(charset.length);

          function generateTarget () {
          if (length < target = Math.floor((Math.random() * 100) + 1)){
          generateTarget();}
          else {
            
          } 
          }
          }
        }
        





    } else {
      console.log("You must select one type of character for your password")
      return;
    }
  }
}


 



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



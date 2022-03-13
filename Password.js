// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    let charset = [];
    const upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const number = ['1','2','3','4','5','6','7','8','9','0'];
    const special = ["!","@","#","$","%","^","&","*"];
    
    let password_length = prompt("How Many Characters do you want? Please choose between 8 - 128");
    if (password_length <= 7 || password_length > 128) {
        alert("Please Enter A Valid Number");
        prompt("How Many Characters do you want? Please choose between 8 - 128");
    }

    //Ask the user what kind of password they want

    var upperCase_Question = confirm("Do you want to include Uppercase characters in your password?");
    if (upperCase_Question) {
        charset = upperCase.concat(charset)
    } else {
        console.log('They dont want UpperCase characters')
    }

    var lowerCase_Question = confirm("Do you want to include Lowercase characters?");
    if (lowerCase_Question) {
        charset = lowerCase.concat(charset)
    } else {
        console.log('They dont want lowercase');
    }

    var number_Question = confirm("Would you like to include Numbers?");
    if (number_Question) {
        charset = number.concat(charset)
    } else {
        console.log("They dont want numbers")
    }

    var special_Question = confirm("Would you like to include special characters as well?");
    if (special_Question) {
        charset = special.concat(charset)
    } else {
        console.log("They dont want special characters")
    }
    var final_password = '';
    for (i=0; i < password_length; i++){
        var random = charset[Math.floor(Math.random() * charset.length)];
        final_password = final_password.concat(random)

    }
    return final_password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

}
   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



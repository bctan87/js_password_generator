// Assignment code here

document.getElementById("generate").addEventListener("click", function(){
// All possible characters
  let LOWERCASE = ("abcdefghijklmnopqrstuvwxyz");
  let UPPERCASE = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let NUMERIC = ("1234567890");
  let SYMBOL = ("!@#$%^&*()");
  let password = "";
  let passwordSelect = "";

// Prompts
  // Character Amount
  let charAmount = prompt("Enter the number of characters for you new password.  Minimum of 8, maximum of 128.");
    // Character min - max checker
    if (charAmount < 8 || charAmount > 128) {
      // If min - max check fails, prompt the user again
      charAmount = alert("Select a number between 8 and 128.");
    }

  // Lowercase
  let hasLowerCase = confirm("Include lowercase characters?")
  
  // Uppercase
  let hasUpperCase = confirm("Include uppercase characters?")
  
  // Numbers
  let hasNumber = confirm("Include Numbers?")

  // Special Characters
  let hasSymbol = confirm("Include special characters?")

    // If user failed to select at least 1 criteria
    if (hasLowerCase == false && hasUpperCase == false && hasNumber == false && hasSymbol == false) {
      // Issue alert 
      alert("Please select at least one criteria");
    }

// Generate Password
function generate_Password() {
  for (var i = 1; i <= charAmount; i++) {
    password = password + passwordSelect.charAt(Math.floor(Math.random() * Math.floor(passwordSelect.length - 1)));
  }
}
  // User has selected all criteria 
  if (hasLowerCase && hasUpperCase && hasNumber && hasSymbol) {
    passwordSelect = LOWERCASE + UPPERCASE + NUMERIC + SYMBOL;
    generate_Password();
  }

  // User has selected lowercase only
  else if (hasLowerCase && !hasUpperCase && !hasNumber && !hasSymbol) {
    passwordSelect = LOWERCASE;
    generate_Password();
  }

  // User has selected uppercase only
  else if (!hasLowerCase && hasUpperCase && !hasNumber && !hasSymbol) {
    passwordSelect = UPPERCASE;
    generate_Password();
  }

  // User has selected numbers only
  else if (!hasLowerCase && !hasUpperCase && hasNumber && !hasSymbol) {
    passwordSelect = NUMERIC;
    generate_Password();
  }

  // User has selected symbols only
  else if (!hasLowerCase && !hasUpperCase && !hasNumber && hasSymbol) {
    passwordSelect = SYMBOL;
    generate_Password();
  }

  // User has selected lowerCase and upperCase
  else if (hasLowerCase && hasUpperCase && !hasNumber && !hasSymbol) {
    passwordSelect = LOWERCASE + UPPERCASE;
    generate_Password();
  }

  //User has selected lowerCase and upperCase and numbers
  else if (hasLowerCase && hasUpperCase && hasNumber && !hasSymbol) {
    passwordSelect = LOWERCASE + UPPERCASE + NUMERIC;
    generate_Password();
  }

  //User has selected lowercase and numbers and special
  else if (hasLowerCase && !hasUpperCase && hasNumber && hasSymbol) {
    passwordSelect = LOWERCASE + NUMERIC + SYMBOL;
    generate_Password();
  }

  //User has selected lowercase and numbers
  else if (hasLowerCase && !hasUpperCase && hasNumber && !hasSymbol) {
    passwordSelect = LOWERCASE + NUMERIC;
    generate_Password();
  }

  // User has selected lowercase and special
  else if (hasLowerCase && !hasUpperCase && !hasNumber && hasSymbol) {
    passwordSelect = LOWERCASE + SYMBOL;
    generate_Password();
  }

  // User has selected upperCase and numbers
  else if (!hasLowerCase && hasUpperCase && hasNumber && !hasSymbol) {
    passwordSelect = UPPERCASE + NUMERIC;
    generate_Password();
  }

  // User has selected uppercase and numbers and special
  else if (!hasLowerCase&& hasUpperCase && hasNumber && hasSymbol) {
    passwordSelect = UPPERCASE + NUMERIC + SYMBOL;
    generate_Password();
  }

  // User has selected uppercase and special
  else if (!hasLowerCase && hasUpperCase && !hasNumber && hasSymbol) {
    passwordSelect = UPPERCASE + SYMBOL;
    generate_Password();
  }

  // User has selected numbers and special
  else if (!hasLowerCase && !hasUpperCase && hasNumber && hasSymbol) {
    passwordSelect = NUMERIC + SYMBOL;
    generate_Password();
  }
  document.getElementById("password").innerHTML = password;
  console.log(password);

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  let password = generate_Password();
  let passwordSelect = document.querySelector("#password");

  passwordSelect.value = password;
}

});

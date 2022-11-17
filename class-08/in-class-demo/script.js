// FUNCTIONS!!!!!

// document.write()
// alert()
// prompt()
// consol.log()
// confirm()

// STRUCTURE:

// function functionName(parameters){code to execute} <-- all on one line

// function functionName(){       <-- same thing, spread out for human readability
//   code to execute;
// }

// parameters are extra info the function will need to do its job

//          I will call the numbers this function can expect number1 and number2 (I make these names up)
function addTwoNumbers(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

//invoking/calling a function: call it by name with ()
addTwoNumbers(4, 3);

// creating/declaring a function to get the user's name and say hi
function sayHi() {
  // local variable, only exists inside the function
  let usersName = prompt("What is your name?");
  // while the user doesn't give ANY name, keep asking them
  while (usersName == ""){
    usersName = prompt("No really, tell me your name.");
  }

  console.log("The user's name is: " + usersName);
  document.write("Hello and welcome to my page, " + usersName);
  // return this information from the function
  return usersName;
}

// creating a function to ask the user if they like cookies
// and give them a response depending on their answer

function likesCookies() {
  let response = prompt("Do you like cookies?")

  if (response == "yes") { // this is where I start conditional logic
    alert("You've come to the right place!");
    document.write("You've come to the right place!");
  } else if (response == "no") {
    alert("What are you doing at a cookie shop website?");
    document.write("What are you doing at a cookie shop website?");
  } else {
    alert("I'm not sure what that means...");
    document.write("I'm not sure what you mean with that response...");
  }
}

// storing the result of a function in a variable
// let usersName = sayHi(); <--

// console.log(usersName);

// ask the user for input, display an image that many times
function rateMyPage(){
  let rating = prompt("How many stars would you rate my page?");
  for (let i = 0; i < rating; i++){
    document.write("<img class='rating-pic' src='star.jpg' alt='shiny gold star' />");
  }
}
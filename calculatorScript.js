const operate = function (number1, operator, number2){
  if (operator == "+"){
    return number1 + number2
  }
  if (operator == "-"){
    return number1 - number2
  }
  if (operator == "/"){
    return number1 / number2
  }
  if (operator == "*"){
    return number1 * number2
  }
} // do I need to create separate functions for each operator and then call them here?

let firstNumber = "";
let secondNumber = "";
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
let displayScreen = document.querySelector("#main-display");
const plusButton = document.querySelector("#plus");

const anyButton = document.querySelectorAll(".button");
anyButton.forEach(ravioliEvent => {
  ravioliEvent.addEventListener("click", clickButton);
  function clickButton() {
    firstNumber += ravioliEvent.textContent;
    displayScreen.textContent += ravioliEvent.textContent;
    // console.log(firstNumber)
  }
});


const operate = function (number1, operator, number2){
  if (operator == "+"){
    return parseInt(number1) + parseInt(number2)
  }
  if (operator == "-"){
    return parseInt(number1) - parseInt(number2)
  }
  if (operator == "/"){
    return parseInt(number1) / parseInt(number2)
  }
  if (operator == "*"){
    return parseInt(number1) * parseInt(number2)
  }
}

let firstNumber = "";
let secondNumber = "";
let operatorVariable = ""
let lastButtonPress = ""
let result;
let mainDisplayScreen = document.querySelector("#main-display");
let smallDisplayScreen = document.querySelector("#small-display")

const anyButton = document.querySelectorAll(".button");
anyButton.forEach(ravioliEvent => {
  ravioliEvent.addEventListener("click", clickButton);
  function clickButton() {
    lastButtonPress = ravioliEvent.textContent;
    let numberPattern = /[0-9]/; 
    let trueIfNumber = numberPattern.test(lastButtonPress) //return true if last button was numeric
    if ((firstNumber == "") || (secondNumber=="" && trueIfNumber && operatorVariable == "")){ //edit firstNumber
      firstNumber += lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      return; 
    }
    if (!trueIfNumber && secondNumber == ""){ // if last key was operator edit operatorVariable
      operatorVariable = lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      return;
    }
    if ((secondNumber != "" && trueIfNumber) || (firstNumber != "" && trueIfNumber && operatorVariable != "")){//edit secondNumber
      secondNumber += lastButtonPress;
      smallDisplayScreen.textContent = `${firstNumber}${operatorVariable}`;
      mainDisplayScreen.textContent = secondNumber;
      return;
    }
    if (secondNumber != "" && !trueIfNumber){ //calculate result when an operator or equal is pressed
      result = operate(firstNumber, operatorVariable, secondNumber);
      firstNumber = result;
      secondNumber = "";
      smallDisplayScreen.textContent = result;
      if (lastButtonPress == "="){
        mainDisplayScreen.textContent = `${result}`;    
      }
      else {
        operatorVariable = lastButtonPress;
        mainDisplayScreen.textContent = `${result} ${lastButtonPress}`;
      }
      return;
    } 
  }
});
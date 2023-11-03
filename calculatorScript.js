const operate = function (number1, operator, number2){
  if (operator == "+"){
    return parseFloat(number1) + parseFloat(number2);
  }
  if (operator == "-"){
    return parseFloat(number1) - parseFloat(number2);
  }
  if (operator == "/"){
    return +(parseFloat(number1) / parseFloat(number2)).toFixed(8);
  }
  if (operator == "*"){
    return +(parseFloat(number1) * parseFloat(number2)).toFixed(8);
  }
}

ClearAll = function () {
  firstNumber = "";
  secondNumber = "";
  operatorVariable = "";
  result = "";
  lastButtonPress = "";
  mainDisplayScreen.textContent = "";
  smallDisplayScreen.textContent = "";
}

let firstNumber = "";
let secondNumber = "";
let operatorVariable = "";
let lastButtonPress = "";
let result;
let mainDisplayScreen = document.querySelector("#main-display");
let smallDisplayScreen = document.querySelector("#small-display");

const anyButton = document.querySelectorAll(".button");
anyButton.forEach(ravioliEvent => {
  ravioliEvent.addEventListener("click", clickButton);
  function clickButton() {
    lastButtonPress = ravioliEvent.textContent;
    let numberPattern = /[0-9]/; 
    let trueIfNumber = numberPattern.test(lastButtonPress); //return true if last button was numeric
    if ((firstNumber == "" && trueIfNumber) || (secondNumber=="" && trueIfNumber && operatorVariable == "")){ //edit firstNumber
      firstNumber += lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      return; 
    }
    if (!trueIfNumber && secondNumber == ""){ // if last key was operator edit operatorVariable
      operatorVariable = lastButtonPress;
      smallDisplayScreen.textContent = firstNumber
      mainDisplayScreen.textContent = lastButtonPress;
      if (lastButtonPress == "Clear") {
        ClearAll();
      }
      return;
    }
    if ((secondNumber != "" && trueIfNumber) || (firstNumber != "" && trueIfNumber && operatorVariable != "")){//edit secondNumber
      secondNumber += lastButtonPress;
      smallDisplayScreen.textContent = `${firstNumber}${operatorVariable}`;
      mainDisplayScreen.textContent = secondNumber;
      return;
    }
    if (secondNumber != "" && !trueIfNumber){ //calculate result when an operator or equal is pressed. or clear everything
      result = operate(firstNumber, operatorVariable, secondNumber);
      if (result == Infinity) {
        ClearAll()
        result = "Don't divide by 0!";
        smallDisplayScreen.textContent = "Don't divide by 0!";
        return;
      }
      firstNumber = result;
      secondNumber = "";
      smallDisplayScreen.textContent = result;
      if (lastButtonPress == "="){
        mainDisplayScreen.textContent = `${result}`;    
      }
      else if (lastButtonPress == "Clear") {
        ClearAll();
      }
      else {
        operatorVariable = lastButtonPress;
        mainDisplayScreen.textContent = `${result} ${lastButtonPress}`;
      }
      return;
    } 
  }
});
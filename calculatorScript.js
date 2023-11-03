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
} // do I need to create separate functions for each operator and then call them here?

let firstNumber = "";
let secondNumber = "";
let operatorVariable = ""
let lastButtonPress = ""
let result;
// const button1 = document.querySelector("#one");
// const button2 = document.querySelector("#two");
let mainDisplayScreen = document.querySelector("#main-display");
let smallDisplayScreen = document.querySelector("#small-display")
// const plusButton = document.querySelector("#plus");

const anyButton = document.querySelectorAll(".button");
anyButton.forEach(ravioliEvent => {
  ravioliEvent.addEventListener("click", clickButton);
  function clickButton() {
    lastButtonPress = ravioliEvent.textContent;
    let numberPattern = /[0-9]/;
    let trueIfNumber = numberPattern.test(lastButtonPress)
    if ((firstNumber == "") || (secondNumber=="" && trueIfNumber && operatorVariable == "")){ //edit firstNumber
      firstNumber += lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      console.log(firstNumber, secondNumber, operatorVariable, "firstnr")
      return; 
    }
    if (!trueIfNumber && secondNumber == ""){ // if last key was operator edit operatorVariable
      operatorVariable = lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      console.log(firstNumber, secondNumber, operatorVariable, "operatoredit")
      return;
    }
    if ((secondNumber != "" && trueIfNumber) || (firstNumber != "" && trueIfNumber && operatorVariable != "")){//edit secondNumber
      secondNumber += lastButtonPress;
      smallDisplayScreen.textContent = `${firstNumber}${operatorVariable}`;
      mainDisplayScreen.textContent = secondNumber;
      console.log(firstNumber, secondNumber, operatorVariable, "secondnredit")
      return;
    }
    if (secondNumber != "" && !trueIfNumber){
      console.log(operatorVariable)
      result = operate(firstNumber, operatorVariable, secondNumber);
      firstNumber = result
      secondNumber = ""
      operatorVariable = lastButtonPress;
      smallDisplayScreen.textContent = result;
      mainDisplayScreen.textContent = `${result} ${lastButtonPress}`;
      return;
    }
  
    
  }
});



// lastButtonPress ="3"
// let pattern = /[0-9]/
// let asdasd = pattern.test(lastButtonPress)
// console.log(asdasd)

// if (firstNumber == "") {
    //   firstNumber += ravioliEvent.textContent;
    //   displayScreen.textContent = ravioliEvent.textContent;
    //   return;
    // }
    // if ((secondNumber == "") && (trueIfNumber) && operatorVariable == ""){
    //   firstNumber += ravioliEvent.textContent;
    //   displayScreen.textContent += ravioliEvent.textContent;
    //   return;
    // }
    // if ((secondNumber == "") && (trueIfNumber) && operatorVariable != ""){
    //   secondNumber += ravioliEvent.textContent
    //   smallDisplayScreen.textContent = displayScreen.textContent
    //   displayScreen.textContent = ravioliEvent.textContent
    //   return;
    // }
    // if (!trueIfNumber){
    //   operatorVariable = ravioliEvent.textContent;
    //   displayScreen.textContent += ravioliEvent.textContent;
    //   return;
    // }
    // if ((secondNumber != "") && (trueIfNumber)){
    //   secondNumber += ravioliEvent.textContent;
    //   smallDisplayScreen.textContent = displayScreen.textContent;
    //   displayScreen += ravioliEvent.textContent;
    //   return
    // }
    // if ((secondNumber != "") && (!trueIfNumber)){
    //   result = operate(firstNumber, operatorVariable, secondNumber)
    //   console.log(result)
    //   secondNumber = ''
    //   firstNumber = result
    //   operatorVariable = ''
    //   smallDisplayScreen.textContent = result //?maybe get it some other way
      
    //   return; //return result?
    // }
    


    // console.log(firstNumber)
    //if firstNumber is not "", use second number instead.
    //no. make this work for all buttons. if operator variable textcontent is operator
    //then move on to secondnumber 
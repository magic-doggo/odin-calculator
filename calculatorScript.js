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
    if ((firstNumber == "") || (secondNumber=="" && trueIfNumber && operatorVariable == "")){
      firstNumber += lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      return; 
    }
    if (!trueIfNumber){ // if last key was operator
      operatorVariable = lastButtonPress;
      mainDisplayScreen.textContent += lastButtonPress;
      return;
    }
    if ((secondNumber != "" && trueIfNumber) || (firstNumber != "" && trueIfNumber && operatorVariable != "")){
      secondNumber += lastButtonPress;
      smallDisplayScreen.textContent = `${firstNumber}${operatorVariable}`;
      mainDisplayScreen.textContent = secondNumber;
      return;
    }
    console.log(mainDisplayScreen.textContent)


    
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
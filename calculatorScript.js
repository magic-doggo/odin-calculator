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


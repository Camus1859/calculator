let screen = document.querySelectorAll(".screen")
let allDigits = ""
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators")
let equal = document.getElementById("equal")
let prevNumOnScreen = 0
let currentNUmOnScreen = 0
let displayValue = 0
let allClicksArray = []
let screenLengthArray = []
let stackB = [];
let stack = [];
let finalExpression = []
let AC = document.getElementById("AC")
let digitClicked;
let numbersAB;
let clicksArrToStr;


function add(x, y){
  return x + y
};

function subtract(y, x){
  return y - x
};

function multiply(x, y){
  return x * y
};

function divide(y, x){

    return  (x) / (y)
  }

function operate(operator, x, y){
  return operator(x, y)
};

function subtractB(y, x){
  return  (x) - (y)
};

function divideB(y, x){
  if (y == 0){
    allClicksArray = [] 
    stackB = []
    return "Cant divide by zero"
  }
    return  (x) / (y)
  }

function precedence (operator){
  switch(operator){
  case "*":
  case "/":
    return 2;
  case "+":
  case "-":
    return 1;
  default:
    return 0;
  }
}
digits.forEach(element => {
  element.addEventListener("click", digitOnScreen) 
  function digitOnScreen() { 
      digitClicked = (element.textContent)
      allClicksArray.push(Number(digitClicked))
      allDigits = allDigits + digitClicked
      displayValue = document.getElementById('screen')
      displayValue.textContent =  Number(allDigits)
      screenLengthArray = []
      screenLengthArray.push(displayValue)
      document.getElementById("screen").style.color = "black"
  }
})

operators.forEach(element => {
  element.addEventListener("click", function (e){
    allClicksArray.push(e.target.classList[1])
    if (screenLengthArray.length > 0) {
      operating = (e.target.classList[1])
      prevNumOnScreen = Number(allDigits)
      allDigits = 0
    }
  })
})

equal.addEventListener("click", function (e){
  currentNUmOnScreen = Number(allDigits)
  clicksArrToStr = allClicksArray.join("")
  let separators = ['+', '-','*', '/',];
  let spacedStr = clicksArrToStr.replace(new RegExp('\\' + separators.join('|\\'), 'g'), ' $& ')
  let computeStr = spacedStr
  let x = computeStr
  numbersAB = x.split(" ")


  for (let i = 0; i < numbersAB.length; i++) {
    if (numbersAB[i] * 1 == numbersAB[i]) {
      finalExpression.push(numbersAB[i]) 
    }
    else if(numbersAB[i] === "+" || numbersAB[i] === "-" || numbersAB[i] === "*" || numbersAB[i] === "/") {
      while(stack.length > 0 && (precedence(numbersAB[i]) <= precedence(stack[stack.length - 1]))) {
        firstOperatorStk = stack.pop()
        finalExpression.push(firstOperatorStk)
      }
      stack.push(numbersAB[i])
    }
  }
  while(stack.length > 0) {
    firstOperatorStk = stack.pop()
    finalExpression.push(firstOperatorStk) 
  }
  finalExpression
  let numbersB = finalExpression
    
  for(let i = 0; i< numbersB.length; i++){
    if(numbersB[i] * 1 == numbersB[i]) {
      stackB.push(parseInt(numbersB[i]))
    }else {
      num1 = stackB.pop()
      num2 = stackB.pop()  
      if (numbersB[i] == "+"){
        total = add(num1, num2)
        stackB.push(total)
      }
      else if (numbersB[i] == "-"){ 
        total = subtractB(num1, num2)
        stackB.push(total)
      }
      else if (numbersB[i] == "*"){
        total = multiply(num1, num2)
        stackB.push(total)
      }
      else if (numbersB[i] == "/"){
        total = divideB(num1, num2)
        stackB.push(total)
      }
    }
  }
  
  displayValue.textContent =  stackB    
  console.log(stackB)
}) 


 
AC.addEventListener("click", function(e){
  displayValue.textContent = 0
  allDigits = 0
  allClicksArray = []
  stack = []
  stackB = []
  newNum = stackB * 0
  numbersB = finalExpression * 0
  numbersAB = numbersAB * 0
  allDigits = ""
  prevNumOnScreen = 0
  currentNUmOnScreen = 0
  displayValue = 0
  allClicksArray = []
  screenLengthArray = []
  stackB = [];
  stack = [];
  finalExpression = []
})
      
    

        




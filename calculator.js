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
  return y / x
};

function operate(operator, x, y){
  return operator(x, y)
};

function subtractB(y, x){
  return  (x) - (y)
};

function divideB(y, x){
  return  (x) / (y)
};


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


digits.forEach(element => {
  element.addEventListener("click", digitOnScreen) 
   function digitOnScreen() { 
     let digitClicked = (element.textContent)
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
    console.log(allClicksArray)
    if (screenLengthArray.length > 0) {
      operating = (e.target.classList[1])
      prevNumOnScreen = Number(allDigits)
      allDigits = 0
    }
    
      equal.addEventListener("click", function (e){
        currentNUmOnScreen = Number(allDigits)
        let clicksArrToStr = allClicksArray.join("")
        let separators = ['+', '-','*', '/',];
        let spacedStr = clicksArrToStr.replace(new RegExp('\\' + separators.join('|\\'), 'g'), ' $& ')
        let computeStr = spacedStr

        displayValue.textContent =  computeStr
        console.log(allClicksArray)
        







      
        if (operating == "+") {
          total = document.getElementById('screen')
          total.textContent =  add(prevNumOnScreen, currentNUmOnScreen )
        }

        else if (operating == "-") {
          total = document.getElementById('screen')
          total.textContent =  subtract(prevNumOnScreen, currentNUmOnScreen)
        }
        
        else if (operating == "*") {
          total = document.getElementById('screen')
          total.textContent =  multiply(currentNUmOnScreen, prevNumOnScreen)
        }
        
        else if (operating == "/") {
          total = document.getElementById('screen')
          total.textContent =  divide(prevNumOnScreen, currentNUmOnScreen)
        } 
      }) 
  })
})

// let numbersAB = '1, "+", 9, "-", 7, "*", 6'
// let stack = [];
// let finalExpression = ""

// function precedence (operator){
//   switch(operator){
//   case "*":
//   case "/":
//     return 2;
//   case "+":
//   case "-":
//     return 1;
//   default:
//     return 0;
//   }
// }

// function expre (){
//     for (let i = 0; i < numbersAB.length; i++) {
//       let char = numbersAB.charAt(i);
//       if (char * 1 == char) {
//         finalExpression += char;   
//       }
      
//       else if(char === "+" || char === "-" || char === "*" || char === "/") {
//         while(stack.length > 0 && (precedence(char) <= precedence(stack[stack.length - 1]))) {
//           firstOperatorStk = stack.pop()
//           finalExpression += firstOperatorStk
//         }
//         stack.push(char)
//       }
//     }
//     while(stack.length > 0) {
//       firstOperatorStk = stack.pop()
//       finalExpression += firstOperatorStk 
//     }
//     console.log(finalExpression.split(" ").join(""))
// }

// expre()




// let numbersB = '19+76*-'

// function evalPostFix(){
//   for(let i = 0; i< numbersB.length; i++){
//     let char = numbersB.charAt(i);

//     if(char * 1 == char) {
//       stackB.push(parseInt(char))

//     }else {
//       num1 = stackB.pop()
//       num2 = stackB.pop()

//       if (char == "+"){
//       total = add(num1, num2)
//       stackB.push(total)
//       }

//       else if
//       (char == "-"){ 
//        total = subtractB(num1, num2)
//        stackB.push(total)
//       }

//       else if
//       (char == "*"){
//        total = multiply(num1, num2)
//        stackB.push(total)

//       }
//       else if
//       (char == "/"){
//        total = divideB(num1, num2)
//        stackB.push(total)
//       }
//       }
//     }
//    return stackB.join(" ")

//   }

// evalPostFix()



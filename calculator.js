// function add(x, y) {
//   return x + y
// };

// function subtract(y, x){
//   return y - x
// };

// function multiply(x, y) {
//   return x * y
// };

// function divide(y, x){
//   return y / x
// };

// function operate(operator, x, y) {
//   return operator(x, y)
// };

// let screen = document.querySelectorAll(".screen")
// let allDigits = ""
// let digits = document.querySelectorAll(".digits");
// let operators = document.querySelectorAll(".operators")
// let equal = document.getElementById("equal")
// let prevNumOnScreen = 0
// let currentNUmOnScreen = 0
// let displayValue = 0
// let allClicksArray = []
// let screenLengthArray = []

// digits.forEach(element => {
//   element.addEventListener("click", digitOnScreen) 
//    function digitOnScreen() { 
//      let digitClicked = (element.textContent)
//       allClicksArray.push(digitClicked)
//       allDigits = allDigits + digitClicked
//       displayValue = document.getElementById('screen')
//       displayValue.textContent =  Number(allDigits)
//       screenLengthArray = []
//       screenLengthArray.push(displayValue)
//       document.getElementById("screen").style.color = "black"
//    }
// })

// operators.forEach(element => {
//   element.addEventListener("click", function (e){
//     allClicksArray.push(e.target.classList[1])
//     console.log(allClicksArray)
//     if (screenLengthArray.length > 0) {
//       operating = (e.target.classList[1])
//       prevNumOnScreen = Number(allDigits)
//       allDigits = 0
//     }
    
//       equal.addEventListener("click", function (e){
//         currentNUmOnScreen = Number(allDigits)
//         let clicksArrToStr = allClicksArray.join("")
//         let separators = ['+', '-','*', '/',];
//         let spacedStr = clicksArrToStr.replace(new RegExp('\\' + separators.join('|\\'), 'g'), ' $& ')
//         let computeStr = spacedStr

//         displayValue.textContent =  computeStr







      
//         if (operating == "+") {
//           total = document.getElementById('screen')
//           total.textContent =  add(prevNumOnScreen, currentNUmOnScreen )
//         }

//         else if (operating == "-") {
//           total = document.getElementById('screen')
//           total.textContent =  subtract(prevNumOnScreen, currentNUmOnScreen)
//         }
        
//         else if (operating == "*") {
//           total = document.getElementById('screen')
//           total.textContent =  multiply(currentNUmOnScreen, prevNumOnScreen)
//         }
        
//         else if (operating == "/") {
//           total = document.getElementById('screen')
//           total.textContent =  divide(prevNumOnScreen, currentNUmOnScreen)
//         } 
//       }) 
//   })
// })

let numbers = ["2", "5", "8", "+", "9", "7", "5", "/", "2"]

var str = numbers.join("")

let separators = ['+', '-','*', '/',];

let strNew = str.replace(new RegExp('\\' + separators.join('|\\'), 'g'), ' $& ')

let computed = strNew.split().join("")

let x = strNew * 1

console.log(x)


let z = 258 + 975 / 2

console.log(z)
   





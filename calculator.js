function add(x, y) {
  return x + y
};

function subtract(x, y){
  return x - y
};

function multiply(x, y) {
  return x * y
};

function divide(){
  return x / y
};

function operate(operator, x, y) {
  return operator(x, y)
};

let screen = document.querySelectorAll(".screen")
let allDigits = ""
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators")
let equal = document.getElementById("equal")
let prevNumOnScreen = 0
let currentNUmOnScreen = 0
let displayValue = 0
let newArray = []

digits.forEach(element => {
  element.addEventListener("click", digitOnScreen) 
   function digitOnScreen() { 
     let digitClicked = (element.textContent)
      allDigits = allDigits + digitClicked
      displayValue = document.getElementById('screen')
      displayValue.textContent =  Number(allDigits)
      newArray = []
      newArray.push(displayValue)
      document.getElementById("screen").style.color = "black"
   }
})


operators.forEach(element => {
  element.addEventListener("click", function (e){
    if (newArray.length > 0) {
      operating = (e.target.classList[1])
      prevNumOnScreen = Number(allDigits)
      allDigits = 0
    }
    
      equal.addEventListener("click", function (e){
        currentNUmOnScreen = Number(allDigits)
      
        if (operating == "add") {
          total = document.getElementById('screen')
          total.textContent =  add(currentNUmOnScreen, prevNumOnScreen)
        }

        else if (operating == "subtract") {
          total = document.getElementById('screen')
          total.textContent =  subtract(currentNUmOnScreen, prevNumOnScreen)
        }
        
        else if (operating == "multiply") {
          total = document.getElementById('screen')
          total.textContent =  multiply(currentNUmOnScreen, prevNumOnScreen)
        }
        
        else if (operating == "divide") {
          total = document.getElementById('screen')
          total.textContent =  divide(currentNUmOnScreen, prevNumOnScreen)
        } 
      }) 
  })
})

   





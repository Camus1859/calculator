function add(x, y) {
  return x + y
};

function subtract(x, y){
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(){
  return x / y
}

function operate(operator, x, y) {

  return operator(x, y)
}

let screen = document.querySelectorAll(".screen")
let allDigits = ""
let number = []
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators")
let screenLength;
let equal = document.querySelectorAll(".equal")
let prevNumOnScreen = 0
let currentNUmOnScreen = 0
let displayValue = 0

digits.forEach(element => {
  element.addEventListener("click", digitOnScreen) 
   function digitOnScreen() { 
     let digitClicked = Number(element.textContent)
     number.push(digitClicked)
     let iterable = number.values()
     for (let value of iterable) {
      allDigits = allDigits + value
      number = []
      displayValue = document.getElementById('screen').textContent =  Number(allDigits)
      let newArray = []
      newArray.push(displayValue)
      screenLength = newArray.join("").split("").length

      
    
   
      document.getElementById("screen").style.color = "black"
     }
   }
})


operators.forEach(element => {
  element.addEventListener("click", function (e){
    if (screenLength > 0) {

    oper = (e.target.classList[1])

  }
    prevNumOnScreen = displayValue

    document.getElementById('screen').textContent =  Number(allDigits) * 0
    
    allDigits = 0




    equal.forEach(element => {
    element.addEventListener("click", function (e){

      allDigits = 0


     currentNUmOnScreen = displayValue
    

     if (oper == "add") {


     total  = document.getElementById('screen').textContent =  add(currentNUmOnScreen, prevNumOnScreen)
     console.log(total)



      }
      else if (e.target.classList[1] == "subtract") {
  
      let subtracting = e.target.classList[1]
      }
      else if (e.target.classList[1]== "multiply") {
  
      let multiplying = e.target.classList[1]
      }
      else if (e.target.classList[1] == "divide") {
        let dividing = e.target.classList[1]
      } 
    })})

 

  })})

    //  if(operaate == "add"){
    //    operaate = add()
    //  }
    //  else if(operaate == "subtract") {
    //    operaate = subtract()
    //  }
    //  else if(operaate == "divide"){
    //    operaate = divide()
    //  }
    //  else if(operaate == "multiply") {
    //    operaate = multiply()
    //  }

    // }
    // equal.addEventListener("click", function(){


    // })




  // })
// });
    
// e.target.classList[1] == "add" || e.target.classList[1] == "subtract" || e.target.classList[1] == "divide"  || e.target.classList[1] == "multiply" && 


    // if (e.target.classList[1] == "add") {

    // let adding = e.target.classList[1]
    // }
    // else if (e.target.classList[1] == "subtract") {

    // let subtracting = e.target.classList[1]
    // }
    // else if (e.target.classList[1]== "multiply") {

    // let multiplying = e.target.classList[1]
    // }
    // else if (e.target.classList[1] == "divide") {
    //   let dividing = e.target.classList[1]
    // }
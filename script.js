let inputNum = document.querySelectorAll(".num-btn");
let output = document.querySelector(".top_screen");
let clear = document.querySelector(".cancel-btn");
let multiplication = document.querySelector(".multiply-btn");
let division = document.querySelector(".divide-btn");
let addition = document.querySelector(".add-btn");
let subtraction = document.querySelector(".subtract-btn"); 
let result = document.querySelector(".equals-btn");
let percentage = document.querySelector(".percent-btn")
let sign = document.querySelector(".neg-btn");

// multiplication = !multiplication;
// division = !division;
// addition = !addition;
// subtraction = !subtraction;

let operator;

let storedNum = [];

for (let i=0; i < inputNum.length; i++) {
    inputNum[i].addEventListener("click", () => {
        output.innerHTML += inputNum[i].innerHTML
    }) 
}

percentage.addEventListener("click", () => {
    output.innerHTML = output.innerHTML*100;
    // if (output.innerHTML = output.innerHTML*100;) {
    //      output.innerHTML = output.innerHTML/100;
    // }
});

sign.addEventListener("click", () => {
    output.innerHTML = "-"+output.innerHTML;
})

multiplication.addEventListener("click", () => {
   operator = "*"; 
   firstNum = output.innerHTML
   storedNum.push(firstNum);
   console.log(storedNum);
   output.innerHTML = "";
    // result.addEventListener("click", () => {
    //     secondNum = output.innerHTML;
    //     storedNum.push(secondNum);
    //     output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum * secondNum);
    // })
});

division.addEventListener("click", () => {
    operator = "÷";
    firstNum = output.innerHTML
    storedNum.push(firstNum);
    console.log(storedNum);
    output.innerHTML = "";
    //  result.addEventListener("click", () => {
    //      secondNum = output.innerHTML;
    //      storedNum.push(secondNum);
    //      output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum / secondNum);
    //  })
 });

addition.addEventListener("click", () => {
    operator = "+";
    firstNum = output.innerHTML
    storedNum.push(firstNum);
    console.log(storedNum);
    output.innerHTML = "";
    //  result.addEventListener("click", () => {
    //      secondNum = output.innerHTML;
    //      storedNum.push(secondNum);
    //      output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum + secondNum);
    //  })
 });

subtraction.addEventListener("click", () => {
    operator = "-"
    firstNum = output.innerHTML
    storedNum.push(firstNum);
    console.log(storedNum);
    output.innerHTML = "";
    //  result.addEventListener("click", () => {
    //      secondNum = output.innerHTML;
    //      storedNum.push(secondNum);
    //      output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum - secondNum);
    //  })
 });

result.addEventListener("click", () => {
    secondNum = output.innerHTML;
    storedNum.push(secondNum); 
    if (operator == "*") {
        output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum * secondNum);
    } else if (operator == "÷") {
        output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum / secondNum);
    } else if (operator == "+") {
        output.innerHTML = storedNum.reduce((firstNum, secondNum) => +firstNum + +secondNum);
    } else if (operator == "-") {
        output.innerHTML = storedNum.reduce((firstNum, secondNum) => firstNum - secondNum);
    }
});    

clear.addEventListener("click", () => {
    storedNum = [];
    console.log(storedNum);
    firstNum = 0;
    secondNum = 0;
    output.innerHTML = "";
})



// Calculator Prompt
var choice = prompt('Type to choose: "Add" "Subtract" "Multiply" "Divide"');

// Direct to +,-,*,/
if (choice === "Add"){
    add()
} else if (choice === "Subtract"){
    subtract()
} else if (choice === "Multiply"){
    multiply()
} else (choice === "Divide");{
    divide()
}

// Addition
function add(){
    if (choice === "Add"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1+num2;
        alert(answer)
        console.log(num1 + " + " + num2 + " = " + answer)
    }
}

//Subtraction
function subtract(){
    if (choice === "Subtract"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1-num2;
        alert(answer)
        console.log(num1 + " - " + num2 + " = " + answer)
    }
}

//Multiplication
function multiply(){
    if (choice === "Multiply"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1*num2;
        alert(answer)
        console.log(num1 + " * " + num2 + " = " + answer)
    }
}

//Division
function divide(){
    if (choice === "Divide"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1/num2;
        alert(answer)
        console.log(num1 + " / " + num2 + " = " + answer)
    }
}
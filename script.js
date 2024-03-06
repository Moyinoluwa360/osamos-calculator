function Display(char){
    const result = document.querySelector("#result");
    result.textContent = char
}
function add (a,b) {
    a = Number(a)
    b = Number(b)
    const add = a + b
    return add
}
  
function subtract(a,b) {
    a = Number(a)
    b = Number(b)
    const subtract = a - b
    return subtract
}
function multiply(a,b){
    a = Number(a)
    b = Number(b)
    return a * b
}
function divide(a,b){
    if (a==0){

    }
    a = Number(a)
    b = Number(b)
    return a / b
}
function operate(num1,num2,sign){
    if (sign == "+"){
        return add(num1,num2)
    }else if (sign == "-"){
        return subtract(num1,num2)
    }else if (sign == "x"){
        return multiply(num1,num2)
    }else if (sign == "÷"){
        return divide(num1,num2)
    }
}
let first_num = ""
let second_num = ""
let sign = ""
let current_result = 0;
// event listener for the numbers
const numbersArr = document.querySelectorAll(".num");
numbersArr.forEach((num) => {
    num.addEventListener('click', () => {
        digit = num.textContent
        if (sign == ""){
            first_num = first_num + digit
            Display(first_num) 
        }else{
            second_num = second_num + digit
            Display(second_num)
        }
    })
})
// event for equal sign
const equals = document.querySelector(".equal");
equals.addEventListener('click', () => {
    if (first_num !="" && second_num =="" || sign ==""){
        Display(first_num)
        first_num = ""
        second_num = ""
        sign = ""
    }else if(first_num =="" || second_num =="" || sign ==""){
        Display("NaN")
    }
    else{
        let result = operate(first_num,second_num,sign)
        current_result = result
        first_num = ""
        second_num = ""
        sign = ""
        Display(result)
    }
})
// event for add
const add_but = document.querySelector(".add");
add_but.addEventListener('click', () => {
    if (first_num !="" && second_num !="" && sign !=""){
        let result = operate(first_num,second_num,sign);
        first_num = result
        second_num = ""
        Display(result)
    }
    sign = "+"
    if (first_num == ""){
        first_num = current_result
    }
    if (second_num != ""){
        let result = operate(first_num,second_num,sign)
        first_num = result
        second_num = ""
        Display(result)
    }
})
// event for subtract
const sub_but = document.querySelector(".minus");
sub_but.addEventListener('click', () => {
    if (first_num !="" && second_num !="" && sign !=""){
        let result = operate(first_num,second_num,sign);
        first_num = result
        second_num = ""
        Display(result)
    }
    sign = "-"
    if (first_num == ""){
        first_num = current_result
    }
    if (second_num != ""){
        let result = operate(first_num,second_num,sign)
        first_num = result
        second_num = ""
        Display(result)
    }
})
// event for multiply
const mul_but = document.querySelector(".multiply");
mul_but.addEventListener('click', () => {
    if (first_num !="" && second_num !="" && sign !=""){
        let result = operate(first_num,second_num,sign);
        first_num = result
        second_num = ""
        Display(result)
    }
    sign = "x"
    if (first_num == ""){
        first_num = current_result
    }
    if (second_num != ""){
        let result = operate(first_num,second_num,sign)
        first_num = result
        second_num = ""
        Display(result)
    }
})
// event for divide
const divide_but = document.querySelector(".divide");
divide_but.addEventListener('click', () => {
    if (first_num !="" && second_num !="" && sign !=""){
        let result = operate(first_num,second_num,sign);
        first_num = result
        second_num = ""
        Display(result)
    }
    sign = "÷"
    if (first_num == ""){
        first_num = current_result
    }
    if (second_num != ""){
        let result = operate(first_num,second_num,sign)
        first_num = result
        second_num = ""
        Display(result)
    }
})
//event for AC
const ac_but = document.querySelector(".ac");
ac_but.addEventListener('click',() => {
    const re_sult = document.querySelector("#result");
    re_sult.textContent = ""
    first_num = ""
    second_num = ""
    sign = ""
    current_result = 0;
})
//event for clear
const clear_but = document.querySelector(".clear");
clear_but.addEventListener('click', () => {
        if (sign == ""){
            first_num = first_num.substring(0, first_num.length - 1)
            Display(first_num) 
        }else if(first_num !="" && second_num =="" && sign !=""){
            sign = ""
        }
        else if(first_num !="" && second_num !="" && sign !=""){
            second_num = second_num.substring(0, second_num.length - 1)
            Display(second_num)
        }
    }
)
// event for point
const point = document.querySelector(".dot");
point.addEventListener('click', () => {
    if (sign == ""){
        let dots = 0
        for (let i = 0; i < first_num.length; i++){
            if (first_num[i] == "."){
                dots += 1
            }
        }
        if (dots ==0){
            first_num = first_num + "."
            Display(first_num)
        }
         
    }else{
        let dots = 0
        for (let i = 0; i < second_num.length; i++){
            if (second_num[i] == "."){
                dots += 1
            }
        }
        if (dots ==0){
            second_num = second_num + "."
            Display(second_num)
        }
    }
} )

const operator=prompt('enter the operator to perform the given task(+ - * /');
const num1 = parseFloat(prompt ('Enter the first number: '));  
const num2 = parseFloat(prompt ('Enter the second number: ')); 
// let num1=12;
// let num2=13;

if(operator=='+'){
    let sum=num1 + num2;
    console.log('sum is ',sum)
}else if(operator=='-'){
    let sub=num1-num2;
    console.log('substraction is ',sub)
}else if(operator=='*'){
    let mul=num1*num2;
    console.log('multiplication is',mul)
}else{
    let div=num1/num2;
    console.log('division is',div)
}

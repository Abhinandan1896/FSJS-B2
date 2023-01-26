function bomain(weight,height){
    let result=weight/(height*height);
    return result;
}
let w=prompt('enter your weight');
let h=prompt('enter your height');
let bmi=bomain(w,h);
console.log('your BMI is',bmi);

if(bmi<18.5){
    console.log('Underweight');
    alert('please increase your wright')
}else if(bmi>=18.5 && bmi<=24.9){
    console.log('Normal weight');
}else if(bmi>=25 && bmi<=29.9){
    console.log('Overweight');
    alert('please reduce your weight')
}else{
    console.log('Obese');
    alert('you will die in some days')
}
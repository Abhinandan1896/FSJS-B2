

function ifelse(){
let age=window.prompt('enter your age', 15);
if(age>=18){
    console.log('You are old enough to drive');
}else{
    let nage=age-18;
    console.log(nage);
}
}
ifelse();
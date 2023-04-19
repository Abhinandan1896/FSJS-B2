//#Values/Data Type:-
//[1]Primitive data types:have only one values
    
//i)Number value:-1,2,3,4
let num=23;
console.log('this is integer',num);
//ii)String value:- 'Abhinandan', "Kawthe"
let nam='Achyut pr';
console.log('the only dheera devotee is',nam);
//iii)Boolean values:- (True or false)
let fnum=22;
let lnum=22;
console.log(fnum>lnum);
//iv)Empty Value:- Null, Undefined

//2)Non-Primitive data types: can have multiple values more than one also
//i)Array
let arr=[1,2,3,4,4,4];
console.log("this is array having multiple values",arr);
//ii)dictionary-key:value pairs
let dic={
    fnam:'kirshna',
    lnam:'Yadav',
    possition:'the supreme persionality of godhead'
}
console.log("this is dictionary having multiple values",dic)

//[2]Variables:- Placeholder for values , container to store values in the memoery allocation
let nav='hare krishna';
const mnum=9123344495;
var age='23';
console.log(nav,mnum,age)

//[3]Operator:-by using different operators we can perform the some mathematical operation
//i)Arithmatic Operator:- +,-,/,*
let a=23;
let b=22;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
//ii)Assignment operator: ==, ===.
//iii)Logical operator: <,>,<=,>=,== etc..

//[4]Conditional Statements
//1)If-else statement
let vay=15;
if (vay>=18) {
    console.log('you are eligible to come in')
} else {
    console.log('You are not allowed')
}
//2)Switch Conditions
let user='Admin';
switch(user){
    case 'admin':
            console.log('wrong candidate');
            break;
    case 'mentor':
            console.log('wrong candidate');
            break;
    case 'Admin':
            console.log('Right candidate');
            break; 
    default:
            console.log('hare krishna ')           
}
//3)ternary Operator
// condition ? true : false;
let number=12;
let numm=23;
let userlogin=23;
if(userlogin==(numm+number));
userlogin ? console.log('logout') : console.log('login');

//[5]Loops:-
//1)For loop
    //write a table for 5
let k=5; 
for(let i=1;i<=10;i++){
    console.log(`${k} * ${i} =${k*i}`)  //``this is symbol which is below esc key
}
//2)While loop
let j=1;
while(j<=7){
  console.log(j);
  j++
}
//3)do-while loop
let i=1; //initilisation variable
do{
    console.log(i);//atleast once run before checking conditions
    i++;
}while(i<=5);//condition 


//DATE- BRINGS CURRENT DATE,TIME ,TIMEZONE
let ak=new Date();
console.log(ak);
console.log(ak.toString());
console.log(ak.getFullYear());
console.log(ak.getMonth());
console.log(ak.getDate());


//MATH- so many new function we can able to use so lets have look on it
let PI=Math.PI;
console.log(Math.PI);
console.log(Math.round(Math.PI));
console.log(Math.round(9.4));
console.log(Math.round(9.8));
console.log(Math.floor(9.9));
console.log(Math.ceil(9.1));
console.log(Math.max(1,2,3,4,5,6,));
console.log(Math.min(1,2,3,2,4,4,4,5,55,3));
//random will give only between 0-9.9999999 only
console.log(Math.random());  
console.log(Math.random() * 13);
console.log(Math.round(Math.random() * 51));


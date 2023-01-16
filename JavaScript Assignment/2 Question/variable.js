//Printing datatypes using literals/interpolation method
//1)Templates literals
let str=`hii gyus, how are you
is everything going well`;
console.log(str);



//2)String interpolation using template literals
//there are two methods of interpolation
//1)UsinG String LITERALS(${})
let fname='Abhinandan';
let lname='Kawthe';
let martial_status='not married';
let country='India';
var age=22;
console.log(`this is my information,\n1)name=${fname} ${lname},\n2)martial status=${martial_status},\n3)country name=${country},\n4)age=${age}`)

//Another example string interpolation
var aname = 'World';  
var cname = 'javaTpoint';  
console.log(`Hello, ${aname}!  
Welcome to ${cname}`);  

//2)using + operand
const c= 5;
const d = 10;
console.log("Fifteen is " + (c + d) + " and\nnot " + (2 * c + d) + ".");
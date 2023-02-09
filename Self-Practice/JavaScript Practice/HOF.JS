//HOF- Higher Order Function
//Callback  //Function is calling a Function
//hof-higher order function are function which take other function as a parameter or return a function as a value. the function passed as parameter is called callback.

//First Class Function:- In JavaScript, everything you can do with other types like object, string, or number, you can do with functions. You can pass them as parameters to other functions (callbacks), assign them to variables and pass them around etc. This is why functions in JavaScript are known as First-Class Functions.


//1)Function as object
function greeting() {
    console.log('Hello World');
  }
               // Invoking the function
  greeting();  // prints 'Hello World'
  greeting.add="hare krishna";
  console.log(greeting.add)

//2)Assigning Functions to Variables
const square = function(x) {
  return x * x;
}
console.log(square(5)) // prints 25
const foo = square;
console.log(foo(6));   // prints 36


//3)Passing function as parameter
function formalGreeting() {
    console.log("How are you?");
  }
  function casualGreeting() {
    console.log("What's up?");
  }
  function greet(type, greetFormal, greetCasual) {
    if(type === 'formal') {
      greetFormal();
    } else if(type === 'casual') {
      greetCasual();
    }
  }
  greet('casual', formalGreeting, casualGreeting); // prints 'What's up?'

//#mini program for hof & callback
const callabck=(n)=>{ //can be written as --function callback(n){code}
    return n**2;
}
//so here callback is actually CALLBACK FUNCTION because it is pased into another function as an argument AND function cube is HIGHER ORDER FUNCTION because in this function anoher function is passed as a parameter and return as function..
function cube(callabck,n){  
    return callabck(n)*2;
}
console.log(cube(callabck,4));

//So there are Many Method to use this HOF & callabck method
//1)ForEach() 
//2)Settimeout()
//3)setinterval()
//4)Map()
//5)reduce()
//6)filter()
//7)find()
//8)every()
//9)some()
//10)sort()


//ForEach() method
const arr=["hk","hari","hari boll","radhe radhe","jay ho"];
//method 1 to write it 
// arr.forEach(myfunc);  //arr.forEach() method=> for each each time iterates hole array for single value of array
// function myfunc(val){ //val getting value from myfunc and myfunc is getting  fro foreach method
//     console.log(val);
// }
//method 2 to write it
//forEach()=>is a HOF & ()=>{}-->is callback
arr.forEach((val)=>{
 console.log(val)
})

//setTimeout() method
setTimeout(()=>{ 
    console.log("Settimeout method")
},2000);

//setInterval() method
// setInterval(()=>{console.log("harii bolll")},1000)

//Map
const number=[1,2,3,4,5,6];
//1 way- this way not getting array result
// number.map((num)=>{
// console.log(num*num)
// })
//2 way- this way getting array result
const numsrt=number.map((num)=>num*num);
console.log(numsrt)

//Filter
const count=["ind","Pak","Can","Irl","Jap","Ger","Sri","Bharat"];

const filtr=count.filter((val)=>val.includes("a"));
console.log(filtr);

//Reduce:- reduce takes the callback function.the call back function takes accumulator,CURRENT & OPTIONAL INITIAL VALUE as a parameter  and returns a single value. it is good practice to define an initial value for the accumulator value. if we do not specify this parameter,by default accumulator will get array first value. if our array is an empty array, then Javascript will throw an error....
const num=[1,2,3,4,5];
const sum=num.reduce((acc,curr)=>acc+curr,1)
const mul=num.reduce((acc,curr)=>acc*curr,2)//acc=curr=1,acc=1&curr=2,acc=2&curr=3,acc=6&curr=4...
console.log(sum);
console.log(mul);

//sort and reverse
const int=[1,2,4,5,6,45,76,43,3,3,44,9];
console.log(int.sort());
console.log(int.reverse());

//destructuring and Spread and Rest
//1)Destructing
const sci=[2.72,3.14,9.81,100];
let [e,pi,grav,btemp]=sci;
console.log(e,pi,grav,btemp);

const arr1=[1,2,3];
let [v1, ,v2]=arr1;
console.log(v1,v2);

const arr2=[1,2,3,4,5,6,7,8]
let [n1,n2,...rest]=arr2;
console.log(n1,n2)
console.log(rest)

//2)Spread(...)->sending data by spreading from array
function sumone(x,y){
    return x+y;
}
let vari=[5,6]; //this data is not indivisual we have to spread out first into chunks and then passout to function
console.log(sumone(...vari));

//3)Rest(...)->collecting date by accumulating it in array
function sum1(...box){
    console.log(box);
    let res=0;
    for(const x of box){
        res=res + x;
    }
    return res;
}
// let arr3=[1,2,3,4,5,6,7,8,10];
// console.log(sum1(arr3))         --->not working
console.log(sum1(1,2,3,4,5,6,7,8))

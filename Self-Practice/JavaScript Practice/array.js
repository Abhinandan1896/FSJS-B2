let names=["hitesh", "Anurag", "anirudh","vinay","krish"];
// console.log(names);
// console.log(names.length); //length of array
// console.log(names[2]); //item at the given index
// console.log(names[names.length-1]);//last index item
// names[4]='Abhinandan';  //changing item of arrya
// console.log(names);

// let declare=new Array('name 1', 'name 2'); //a way to declare a array//not recomnded always
// console.log(declare);

//METHODS
//1) PUSH- INSERT NEW VALUE INSIDE THE ARRYA AT THE END
// names.push("VYOM");
// console.log(names);
 
//2)SLICE-(to extract multiple values from main array) it will take items from array and Exclusived the last index..
//console.log(names.slice(1,3));
//console.log(names.slice(3,5));

//3)SPLICE- 2-starting index from where to insert item & 1-is how many is to delete or replace with original item frpm 2 index
// let fruit=["Apple","Bada Apple","Chota apple","baduka apple", "nice apple"];
// fruit.splice(2,1,'Kharab apple','Achha apple');
// console.log(fruit);

//4)concatenation- to coneects two things
// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// let arr3=[9,10,13,14];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2,arr3));

//5)fill- homework
// let arr4=[1,2,3,4,5,5,6,6]
// arr4.fill('anurag',2,4);
// console.log(arr4);

//6)INCLUDE- present in the array list-- homework
// let num=[1,2,3,4,5,6,7,6];
// console.log(num.includes(6,6));

//7)indexOf
// let num1=[1,2,3,4,5,6,7,8];
// console.log(num1.indexOf(5));

//8)isArray()- to check wheather it is arrray or not
// let num2=[1,2,3,4,5,6,7,8];
// console.log(Array.isArray(num2));

//9)join- it will join the each array item with given input
// let num3=[1,2,3,4,5,6,7,8];
// console.log(num3.join(' connect '));

//10)lastIndexOf- checks the given items is presented in which index
// let num1=[1,2,3,4,5,6,7,8,8,'Ak'];
// console.log(num1.lastIndexOf('Ak'));

//11)map()-- it will apply to all the element present in the array list
// let arr5=[1,4,9,25];
// console.log(arr5.map(Math.sqrt));
// console.log(arr5);

//12)Pop- it will remove one item from last
// let maths=[1,2,3,4,24];
// console.log(maths.pop());
// console.log(maths);

//13)Reverse the array
// let maths=[1,2,3,4,24];
// console.log(maths.reverse());

//14)Shift()-- remove the first item from start 
// let maths=[1,2,3,4,24];
// console.log(maths.shift());
// console.log(maths);

//15)Sort-sort the array
// let maths=[1,2,3,6,3,4,6,8,6,4,9,20,45,6,65];
// console.log(maths.sort());
// console.log(maths);

//16)unshift- means adding items at the first of the array.
// let maths=[1,2,3,4,24];
// maths.unshift("hare","Krishna");
// console.log(maths);

//17)Coverting to array
// let name='anurag sir';
// let array1=name.split('');
// console.log(array1);

//for of.-- it is speacially to make somthing similar in the whole array
// let maths=['apple','bada apple','chota apple','doble apple'];
// let Uppermaths=[]; //empty Array
// for(const badaletter of maths){
//     Uppermaths.push(badaletter.toUpperCase());
// }
// console.log(Uppermaths);

//break & Continue
for(let i=0; i<=5;i++){
    if(i==3){
    break;} //stop the loop 
    console.log(i);
}
for(let i=1; i<=5;i++){
    if(i==3){
    continue; //skip or omit
    }
    console.log(i);
}

//HOMEWORK-- ARRAY METHODS IN JAVASCRIPT AND WRITE A BLOG ON IT;(COMPULSORY)

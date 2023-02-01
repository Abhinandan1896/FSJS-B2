//PROTOTYPE- ITS WAY TO CONNECT THE PROPERTIES IN THE FORM OF OBJECT TO THE OUR ORIGINAL OBJECT 

//akshay Saini
// let arr=['Abhinandan','kawthe'];
// console.log(arr);
// let object={
//     name:"Abhinandan",
//     city:"Pune",
//     getIntro: function(){
//         console.log(this.name +' From '+ this.city)
//     }
// }

//Hitesh Sir
let myheros=['Spiderman','Batman']
let herpower={
    Spiderman:"sling",
    Batman:'nightshift',
    grtSpiderPower:function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heyhitesh=function(){
    console.log(`hitesh says hellow friend`)
}
myheros.hitesh()  //CHAINING TO PROTOTYPE

//INHERITENCE
const user={
    name:'top name',
    email:'topuser@gmai.com'
}
const teacher={
    makevideos:true
}
const teachingsupport={
    isavailabe:false
}
const tassistant={
    makeassignment:'js assignment',
    fulltime:true,
    __proto__:teachingsupport //inherite from anoher object
}
//old syntax
teacher.__proto__=user 
//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)

//goal to get truelength of myname
String.prototype.truelength= function(){
    console.log(`true length is: ${this.trim().length}`);
}
let myname="hitesh   ";
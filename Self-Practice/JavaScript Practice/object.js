// //OBJECTS:- As in JS everything is objects only with {} keywords
// //there two types of engine in browser
// //1)Rendering engine/layout one-which renders html,css stuff 
// //2)Execution engine/javascript engine- which run our javascript engine/provides console to write and run js code

// let nam={
//     fname:'Abhinadan',
//     lname:'Kawthe',
//     mobno:243223535,
//     age:23
// }
// console.log(nam);
// console.log(nam.mobno);
// console.log();

// //for in loop
// for(let x in nam){
//     console.log(x);  //all key get into x 
//    console.log(nam[x]);  //from x i.e keys we can get values very easily
// }

// //OBJECTS(contins property in property key:values pair)//nearly all objects in javascript are instaces of object because they all inherite the property from there PARENTS

// //PART-1
// const object={
//     rocket:'🚀',
//     home:'🏠'
// }
// console.log(object)
// //Literals:- string , number, biginit, boolean, null, undefine, symbol
// const obj1={
//     rocket:'🚀',
//     fuel:20,
//     config:{
//         name:'mars',
//         dom:2023
//     }
// }
// //Adding properties via dot(.) or ([]) notation given below
// obj1.fuel=200     //changing the values of keys
// obj1['Year']=2022 //adding new key and its value
// console.log(obj1);//print

//PART-2
// const obj2=new Object() //Declaring object using CONSTRUCTOR //new keyword MATTER a lot
// obj2.redbook='📙'
// obj2.bluebook='📘'
// obj2.addingkey='declaring value to it'
// console.log(obj2)

// //PART-3
// const power={
//     fly:'right',
//     cordinate:Math.random() + 2
// }
// const obj3=Object.create(power)
// console.log(obj3)
// console.log(obj3.cordinate)
// console.log(obj3.fly)
// console.log(Object.getPrototypeOf(obj3)) //get the property from obj3 and obj3 if empty then it get from his parent i.e from power
// //create can get all properties from inherited object but  the new object will always empty to make clean and new object can inherite the properti from another object
// //creates  puts all properties from main object to prototype of the new object

// //PART-4
// const obj4=Object.create({})  
// //passing an empty object in the obj4
// //Method to add property
// // obj4.name='hitesh sir'
// // console.log(obj4)
// //Another Method to add property
// Object.defineProperty(obj4, 'book', {
//     // icon:'📘'
//     get: () => '📘',
//     enumerable: true  //enumerable gives the access to some restricated object/properties
// })
// // console.log(obj4)
// // console.log(obj4.book)
// // console.log(Object.getPrototypeOf(obj4)) 
// for(k in obj4){
//     console.log('values is :',k); 
// }
// //getProperty to get the properties from the obj4
// //An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object. keys() method. All the properties which are created by simple assignment or property initializer are enumerable by default.

// //PART-5
// const obj5={
//     comics:'marvel, Captain Jacksparoww',
//     pen:'',
//     printcomic: function(){ 
//        this.pen +='🖋️📖📘'
//        console.log(this);
//        return this;
//     },
//     // printacomic: ()=>{ 
//     //     // this.pen +='🖋️📖📘'
//     //    console.log(this);
//     //  }
//     }
//     console.log(obj5.printcomic()) 
//     console.log(obj5.printcomic().printcomic().printcomic())  
//     // console.log(obj5.printacomic())     

//     //YOU CAN NOT USE this. IN THE ARROW FUNCTION IT DON'T HAVE THE CONTEXT OF THE THIS KEYWORD
//     //this. always pointing towards the parent 
//     //this will target the pen variable from this scope only not from any other if it is already declared
//     // printcomic:()=>{}
//     // arrow function not as 
//     //Method==Function same name

//Try-->it check wheather your code will run on server or not 
//catch-->its give alternative to error
// try{
//     //Logic Error
//     console.log(anurag);
// }catch(err){
//     //Error Handling Message
//     console.log(err.name)
// }

// try{
//     let fname="Anurag";
//     console.log(fname+" "+lname);
// }catch(err){
//     console.log("variable name is missing")
// }finally{
//     console.log("i will run at any given cost")
// }

//please check on the MDN
//1)throw:-
//2)Different types of error we have in JavaScript:-
/*
1)Reference Error
2)Syntax Error
3)Type Error*/


//Promise:it is words given for something
/*
1)Pending
2)fullfilled
3)rejected
*/
const one=()=>{
    return "i am one";
};
const two=()=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("i am two,credential correct");
     },3000)   
    });
};
const three=()=>{
    return "i am three";
};

const callme=async ()=>{
    let val1=one();
    console.log(val1);

    let val2=await two();
    console.log(val2);

    let val3=three();
    console.log(val3);
}
callme();



//Event loop
// const user1=()=>{
//     console.log("hello one");
// }
// const user2=()=>{
//     console.log("hello tow");
//     setTimeout(()=>{
//         console.log("hellow, i am inside a loop")
//     },3000) //promise=>REsolved Rejected
// }
// const user3=()=>{
//     console.log("hello three");
// }
// user1();
// user2();
// user3();


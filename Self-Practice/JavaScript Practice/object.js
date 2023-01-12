//OBJECTS:- As in JS everythin is objects only with {} keywords

let nam={
    fname:'Abhinadan',
    lname:'Kawthe',
    mobno:243223535,
    age:23
}
console.log(nam);
console.log(nam.mobno);
nam.age=21;
console.log(nam);

for(let x in nam){
    console.log(x);  //all key get into x 
    console.log(nam[x]);  //from x i.e keys we can get values very easily
}




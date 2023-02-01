let x=10, y=15, z=20;

//below are the true statments
let r1=Boolean(10);
let r2=Boolean(y>x);
let r3=Boolean(z);
console.log(r1,'\n',r2,'\n',r3);

//below are the false statments
let m=0, n="", o;
let t1=Boolean(m)
let t2=Boolean(n)     //empty booleans is also false/empty string is also false
let t3=Boolean(n>m)
let t4=Boolean(o)
console.log(t1,'\n',t2,'\n',t3,'\n',t4);



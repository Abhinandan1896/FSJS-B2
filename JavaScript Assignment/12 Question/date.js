let date = new Date();
let month=date.getMonth();
let day=date.getDate();
let year=date.getFullYear();
let MDY=[month, day, year];

let hour=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let HMS= [hour, minutes, seconds];

//Human readable format
//MM-DD-YY 
console.log(month,"-",day,"-",year,"  ",hour,":",minutes)
//YY-MM-DD
console.log(year,"-",month,"-",day,"  ",hour,":",minutes)
//DD-MM-YY
console.log(day,"-",month,"-",year,"  ",hour,":",minutes)


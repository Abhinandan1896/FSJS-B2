//Split()- very important
let college='Sinhgad collge of engineering pune';
console.log(college);

//split() by each words using space tab
let arr=college.split(' ');
console.log(arr);

//split() by each character by using empty string
let clg='Abhinandan Vasant Kawthe';
let arr1=clg.split('');
console.log(arr1);

//split() without any splitter - will give an array with string value as it is
let arr2=college.split();
console.log(arr2);


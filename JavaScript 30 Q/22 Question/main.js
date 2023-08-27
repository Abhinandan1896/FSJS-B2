const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.length)
//1)Sort and find the min max
ages.sort(function(a, b){return a - b});
console.log('ascending order',ages);
ages.sort(function(a, b){return b - a});
console.log('decending order',ages);
let mx=Math.max(...ages);
let mn=Math.min(...ages)
console.log(mx);
console.log(mn);

//2)Find out the median
let median;
//if else block to check for even or odd
if(ages.length%2 != 0){
    //odd case

    //find middle index
    let middleIndex = Math.floor(ages.length/2)

    //find median
    median = ages[middleIndex];
}else{
    //even case

    //find middle index
    let middleIndex = Math.floor(ages.length/2)

    //find median
    median = (ages[middleIndex] + ages[middleIndex - 1])/2
}
console.log('median of ages is',median)

//3)Find the average
let sum=0;
for(let i=0;i<ages.length;i++){
    sum=sum+ages[i];
}
let average=sum/ages.length;
console.log('average of ages',average);

//4)Find the range of the ages(max minus min)
let range=Math.max(...ages)-Math.min(...ages);
console.log(range);

//5)Compare the value of (min - average) and (max - average), use abs() method
let a=Math.abs(mx-average);
let b=Math.abs(mn-average);
console.log(a,b);
console.log(Math.abs(-1));
console.log(Math.abs(0));


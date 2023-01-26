let num=prompt('enter a number to cheack for prime');
if(num==1){
    console.log('1 is not prime number as well as composite number');
}else if(num>1){
    if(num%2==0){
        console.log(num,'is not a prime number')
    }
    else{
        console.log(num,'is a prime number')
    }
}else{
    console.log(num,'is not a prime number')
}
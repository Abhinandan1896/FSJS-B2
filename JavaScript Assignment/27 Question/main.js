let prime=[];
for(let i=0;i<=100;i++){
    if(i==1){
        continue;
    }
    else if(i%2!==0){
        prime.push(i);
        console.log(i)
    }
}
console.log(prime);
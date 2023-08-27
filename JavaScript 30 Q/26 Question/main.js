const num = parseInt(prompt('Enter an integer: '));
for(let i=1;i<=10;i++){
    let result=(i*num);
    let table=(`${num} * ${i} = ${result}`);
    console.log(table);
}
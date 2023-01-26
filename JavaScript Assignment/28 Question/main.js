// //main loop will excute and end and end of the main loop the middle loop will again start with the zero because in each iteration the valur of j will be same...
// //loop will execute fully whenever it starts and if it ends then again start from scratch...

//1)Right angle triangle star pattern
for(let i=0;i<=2;i++){
       let string=''   //empty string for second loopp
    for(let j=0;j<=i;j++){
        string +='*'  //string=string+"*"
    }
    console.log(string); //Final String
}

//2)Square Pattern
for(let i=1;i<=3;i++){
    console.log('***');
}a

//3)Pyramid Pattern
let rows=3;
for(let i = 1; i <= rows; i++){
    let str = '';
    //Add the white space to the left
    for(let k = 1; k <= (rows - i); k++){
      str += ' ';
    }
    //Add the '*' for each row
    for(let j = 0; j < (2 * i - 1); j++){
      str += '*';
    }
    //Add the white space to the right
    // for(let k =  i + 1; k <= rows; k++){
    //   str += ' ';
    // }
    for(let k = 1; k <= (rows - i); k++){
      str += ' ';
    }
     //Print the pyramid pattern for each row
     //here value of string comes from above loop after each loop executed fully
    console.log(str);
  }

  //4)again pyramid
  
  for(let i=1;i<=3;i++){
    let str="";
    for(let k=1;k<=(3-i);k++){
      str+=" ";
    }
    for(let j=1;j<=(2*i-1);j++){
      str+="*";
    }
    // str+="\n";
    console.log(str);

  }




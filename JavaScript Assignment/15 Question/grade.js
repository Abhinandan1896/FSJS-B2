let marks=prompt('enter your marks obtain :')
confirm('have you enter your marks correctly')
switch(true){  
//whatever is here return in the switch statement that should be matches with case statement also for eg: TRUE in SWITCH so there should be TRUE in the CASE statment also
//string in switch then must string in case
    case(marks>=80):
              console.log('congratulation- A Grade');
              break;
    case(marks<80 && marks>=70):
              console.log('congrats-B Grade');
              break;
    case(marks<70 && marks>=60):
              console.log('good got- C Grade');
              break;
    case(marks<60 && marks>=50):
              console.log('not good- D Grade')
              break;
    default:
              console.log('you are failed');                
} 
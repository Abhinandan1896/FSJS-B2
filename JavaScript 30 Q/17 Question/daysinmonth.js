//declaring a function with passing argument like Year and Month to calculate the days in given month in given year
alert('read more about this question carefully')
//check how this is working
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  let Month =prompt('enter a month to find out number of days');
  let date = new Date();
  let Year = date.getFullYear();
  // Storing the results of above function in the new variable
  const daysInMonth = getDaysInMonth(Year,Month); 
  console.log(daysInMonth);
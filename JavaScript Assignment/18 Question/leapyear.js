let a = prompt('Enter the month(only first 3 character of month name):');

let b = a.charAt(0).toUpperCase();

let c = a.slice(1, a.length).toLowerCase();

let Month = (b + c);

if ('Jan' === Month || 'Mar' === Month || 'May' === Month || 'Jul' === Month || 'Agu' === Month || 'Oct' === Month || 'Dec' === Month) {
console.log(`${Month} has 31 days`)
}
else if ('Feb' === Month) {
console.log(`${Month} has 28 days`);
} 
else if ('Apr' === Month || 'Jun' === Month || 'Sep' === Month || 'Nov' === Month) {
   console.log(`${Month} has 30 days`)
}
else{
console.log('Re-Enter');
}
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('salt');
console.log('added item at first',shoppingCart);

shoppingCart.push('sugar');
console.log('added item at last',shoppingCart);

shoppingCart.splice(3,1," ");
console.log('removed item from index 4 using splice',shoppingCart);

shoppingCart[3]='Green Tea';
console.log('modified the item at index 3',shoppingCart);
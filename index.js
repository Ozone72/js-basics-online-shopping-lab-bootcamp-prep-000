var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100)+1
  cart.push({[item]:price});
  console.log(`{item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length){ //if cart length is 0 or FALSE, return empty message
    return console.log("Your shopping cat is empty.")
  }
  let itemsCosts = [] //new array for items + costs
  for (let i = 0; i < cart.length; i++) {
    array[i]
  }
  
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

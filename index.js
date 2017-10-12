var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100)+1 //generates a new $ value between 1 - 100
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

addToCart('radish')
addToCart('peanut butter');
//addToCart('shame remover')

function viewCart() {
  if (!cart.length){ //if cart length is 0 or FALSE, return empty message
    return console.log("Your shopping cart is empty.");
  }
  let itemsCosts = [] //new array for items + costs
  for (let i = 0; i < cart.length; i++) { //iterates length of the cart and for each 
    let cartItem = cart[i] //on each iteration of the loop, the cart[index] is assigned to itemsCosts
    let cartItemKey = Object.keys(cartItem)[0] //cartItem stores the key of the object at cart[i][0], etc...
    let cartItemValue = cartItem[cartItemKey] //assigns value to key
    //console.log(`cartItem = ${cartItem} /n cartItemKey = ${cartItemKey} /n cartItemValue = ${cartItemValue}`)
    itemsCosts.push(`${cartItemKey} at $${cartItemValue}`) //pushes destructured key:value pair as a string
  }
  //console.log(itemsCosts);
  if(itemsCosts.length === 1){
    return console.log(`In your cart, you have ${itemsCosts}.`) //returns this string 
  }
  else if(itemsCosts.length === 2){
    itemsCosts = itemsCosts.join(" and ")
    return console.log(`In your cart, you have ${itemsCosts}.`)
  }
  else{
    itemsCosts[cart.length-1] = "and ".concat(itemsCosts[cart.length-1])
    itemsCosts = itemsCosts.join(", ")
    return console.log(`In your cart, you have ${itemsCosts}.`)
  }
}
viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

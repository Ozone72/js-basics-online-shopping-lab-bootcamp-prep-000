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

addToCart("radish")
addToCart("peanut butter")
addToCart("shame remover")

function viewCart() {
  if (!cart.length){ //if cart length is 0 or FALSE, return empty message
    return console.log("Your shopping cat is empty.")
  }
  let itemsCosts = [] //new array for items + costs
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i] //on each iteration of the loop, the cart[index] is assigned to itemsCosts
    let cartItemKey = Object.keys(cartItem)[0] //cartItem stores the key of the object at cart[i][0], etc...
    let cartItemValue = cartItem[cartItemKey] //assigns value to key
    itemsCosts.push(`${cartItem} at $${cartItemValue}`)
  }
  console.log(itemsCosts);

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


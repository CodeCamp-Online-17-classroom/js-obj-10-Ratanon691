function fruit() {
  let basket = {}
  while (true) {
    let key = prompt(`what kind of fruit is in the basket?`)
    if (key.toLowerCase() === `stop`) {
      break;
    }
    let value = prompt(`how many ${key} are there?`)
    if(value > 1){
      basket[key + `s`] = value
    }else{
    basket[key] = value
    }
  }
  console.log(basket)
}

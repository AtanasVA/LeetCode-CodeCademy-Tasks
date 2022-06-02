const groceries = arr => {
  let basket = [];
  let lastElement = [];

  for (element of arr){
    basket.push(element.item);
  }
  
  basket.reverse();
  lastElement = ` and ${basket[0]}`;
  basket.reverse();

  if(basket.length === 1){
    return basket.join();
  } else {
    basket.pop();
    return basket.join(', ') + lastElement;
  }
  
}

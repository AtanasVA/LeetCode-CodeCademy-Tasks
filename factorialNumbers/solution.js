const factorial = num => {
  let result = num;
  
  while(num > 1){
    num--;
    result *= num;
  }

  return result;
}

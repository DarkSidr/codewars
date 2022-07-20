function opposite(number) {
  let str = String(number);
  if(str.charAt(0) === '-') {
    return +str.slice(1);
  } else {
    return +`-${str}`;
  }
}
function factorial(n) {
  let result = n;
  if (n <= 0) {
    return 1;
  }
  while (n > 1) {
    result = result * (n - 1);
    n--;
  } return result; 
}

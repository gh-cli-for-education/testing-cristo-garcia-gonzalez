function factorial(n) {
  if (n === 0) return 1;
  return factorial(n-1) * n;
}

function main() {
  console.log(factorial(5));
}

main();

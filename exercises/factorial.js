const factorial = (n) => {
  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return 1;
  } else {
    const result = n * factorial(n - 1);
    return result;
  }

}

module.exports = factorial;

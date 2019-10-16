const factorial = require('./factorial');

describe('factorial', () => {
  it('should return the factorial of 4', () => {
    expect(factorial(4)).toEqual(24);
  });

  it('should return the factorial of 10', () => {
    expect(factorial(10)).toEqual(3628800);
  });
});

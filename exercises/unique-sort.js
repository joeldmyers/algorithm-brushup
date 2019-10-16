// task - transform simple sorting algorithm into a unique sort.
// it should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqueSort = (array) => {
  const memo = {};
  array.forEach((item) => {
    if (!memo[item]) {
      memo[item] = true;
    }
  });
  return Object.keys(memo).sort((a,b) => a - b);
}


module.exports = uniqueSort;

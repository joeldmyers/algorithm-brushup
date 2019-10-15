// task - transform simple sorting algorithm into a unique sort.
// it should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqueSort = (array) => {
  const memo = {};
  array.forEach((item) => {
    memo[item] = true;
    return;
  });
  console.log(Object.keys(memo));
  return Object.keys(memo).sort((a,b) => a - b);
}

uniqueSort([1,5,2,1]);
uniqueSort([4,2,2,3,2,2,2]);

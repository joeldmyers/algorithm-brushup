const timesTen = (n) => {
  return n * 10;
}

let cache = {};
const memoTimesTen = (n) => {
  if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = timesTen(n);
    return timesTen(n);
  }
};


module.exports = memoTimesTen;

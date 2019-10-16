const memoTimesTen = require('./memo-exercise-1');

describe('memoTimesTen', () => {
  it('should multiply 30 by 10', () => {
    expect(memoTimesTen(30)).toEqual(300);
  });
});

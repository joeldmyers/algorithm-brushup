const uniqueSort = require('./unique-sort');


describe('uniqueSort', () => {
  it('should dedupe and sort the array', () => {
    expect(uniqueSort([1,4,4,3])).toEqual(['1','3','4']);
  });
});

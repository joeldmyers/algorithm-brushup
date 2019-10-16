const uniqueSort = require('./unique-sort');


describe('uniqueSort', () => {
  it('should dedupe and sort the first array', () => {
    expect(uniqueSort([1,4,4,3])).toEqual(['1','3','4']);
  });

  it('should dedupe and sort the second array', () => {
    expect(uniqueSort([4,2,2,3,2,2,2])).toEqual(['2','3','4']);
  });
});

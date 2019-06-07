const assert = require('assert');

const binarySearch = require('../lib/binarySearch.js');

describe('binarySearch', () => {
  const arr = [1, 2, 4, 5, 8];

  describe('item found', () => {
    it('return index of the item found', () => {
      assert.equal(binarySearch(4, arr), 2);
    });

    it('when in array onr element', () => {
      assert.equal(binarySearch(2, [2]), 0);
    });
  });

  describe('return -1 when item not found', () => {
    it('empty array', () => {
      assert.equal(binarySearch(42, []), -1);
    });

    it('array without desired item', () => {
      assert.equal(binarySearch(3, arr), -1);
    });
  });
});

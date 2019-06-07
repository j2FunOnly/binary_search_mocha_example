const assert = require('assert');

const binarySearch = require('../lib/binarySearch.js');

describe('binarySearch', () => {
  it ('return index of found element', () => {
    const target = 4;
    const arr = [1, 2, 4, 5, 8];

    assert.equal(binarySearch(target, arr), 2);
  });

  it ('return "-1" if element not found', () => {
    const target = 3;
    const arr = [1, 2, 4, 5, 8];

    assert.equal(binarySearch(target, arr), -1);
  });
});

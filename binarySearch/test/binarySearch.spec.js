import { expect } from "chai";
import binarySearch from '../binarySearch.js';

describe('binarySearch', () => {
  it('should return 3', () => {
    const values = [1, 2, 7, 11, 15];
    const target = 11;
    const result = binarySearch(values, target);
    (values, target);
    expect(result).to.equal(3);
  })

  it('should return -1', () => {
    const values = [2, 3, 4];
    const target = 6;
    const result = binarySearch(values, target);
    expect(result).to.equal(-1);
  })

  it('should return 0', () => {
    const values = [-1, 45, 100, 112];
    const target = -1;
    const result = binarySearch(values, target);
    expect(result).to.equal(0);
  })

  it('should return array length - 1', () => {
    const values = [-1, 45, 100, 112];
    const target = 112;
    const result = binarySearch(values, target);
    expect(result).to.equal(values.length - 1);
  })
})

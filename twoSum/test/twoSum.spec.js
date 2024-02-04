import { expect } from "chai";
import twoSum from "../twoSum.js";

describe('twoSum', () => {
  it('should return 9', () => {
    const values = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(values, target);
    expect(result).to.deep.equal([0, 1]);
  })

  it('should return 6', () => {
    const values = [3, 2, 4];
    const target = 6;
    const result = twoSum(values, target);
    expect(result).to.deep.equal([1, 2]);
  })

  it('should return 6', () => {
    const values = [3, 3];
    const target = 6;
    const result = twoSum(values, target);
    expect(result).to.deep.equal([0, 1]);
  })
})

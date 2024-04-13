import { expect } from "chai";
import validParentheses from "../validParentheses.js";

describe('validParentheses', () => {
  it('should return true', () => {
    const result = validParentheses("()");
    expect(result).to.be.true
  })

  it('should return true', () => {
    const result = validParentheses("()[]{}");
    expect(result).to.be.true
  })

  it('should return false', () => {
    const result = validParentheses("(]");
    expect(result).to.be.false
  })
})

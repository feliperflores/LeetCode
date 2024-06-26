/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 *
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 *
 * Constraints:
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 * @param {string} s
 * @return {boolean}
 */
export default function validParentheses(s) {
  const startCharactersByEndCharacters = {
      "}": "{",
      "]": "[",
      ")": "(",
  }
  const stack = [];
  for (const character of s) {
      const lastValue = stack[stack.length - 1];
      if (lastValue && lastValue === startCharactersByEndCharacters[character]) {
          stack.pop();
          continue;
      }
      stack.push(character);
  }
  return stack.length === 0;
};

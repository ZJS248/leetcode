/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const left = ["(", "[", "{"];
  const right = [")", "]", "}"];
  const index = [];
  for (let i = 0; i < s.length; i++) {
    const leftIndex = left.indexOf(s[i]);
    if (index.length === 0 && leftIndex === -1) {
      return false;
    }
    const nowIndex = index[index.length - 1];
    if (leftIndex > -1) {
      index.push(leftIndex);
    } else if (right[nowIndex] === s[i]) {
      index.splice(-1, 1);
    } else {
      return false;
    }
  }

  return index.length === 0;
}
// @lc code=end
console.log(isValid("("));
console.log(isValid("()"));
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))

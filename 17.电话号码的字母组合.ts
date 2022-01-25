/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (57.45%)
 * Likes:    1670
 * Dislikes: 0
 * Total Accepted:    382.6K
 * Total Submissions: 665.3K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = ""
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 *
 *
 */

// @lc code=start
const list = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];
const getMap = (str: string, arr: string[]) => {
  return arr.map((l) => str + l);
};
const loop = (arr: any[], callback: (item: string) => void) => {
  const newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(loop(item, callback));
    } else {
      newArr.push(callback(item));
    }
  });
  return newArr;
};
function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const str: any[] = [""];
  const nums = digits.split("");
  for (let i = 0; i < nums.length; i++) {
    const map = list[Number(nums[i]) - 2]; //[ 'a', 'b', 'c' ]
    str.push(
      loop(str, (s: string) => {
        const rest = getMap(s, map);
        return rest;
      })
    );
  }
  const arr = [];
  loop(str.slice(nums.length), (s) => {
    if (s.length === nums.length) {
      arr.push(s);
    }
  });
  return arr;
}
// @lc code=end

console.log(letterCombinations("23"));

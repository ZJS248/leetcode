/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (35.08%)
 * Likes:    3331
 * Dislikes: 0
 * Total Accepted:    915.5K
 * Total Submissions: 2.6M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
function reverse(x: number): number {
  if(x===0||x>2**31-1||x<(-2)**31) return 0
  let str = String(x)
  let rest =''
  let restr= ''
  let start = 0
  if(str[0]==='-'){
    start=1,
    rest='-'
  }
  for(;start<=str.length-1;start++){
    restr=str[start]+restr
  }
  const result = Number(rest+restr)
  if(result<((-2)**31)||result>2**31) return 0
  return result
};
// @lc code=end

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
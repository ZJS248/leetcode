/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (22.02%)
 * Likes:    805
 * Dislikes: 0
 * Total Accepted:    140.8K
 * Total Submissions: 638.5K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) =
 * -2
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = truncate(-2.33333..) = -2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */

// @lc code=start
function cal(sum: number, value: number, count = 0) {
  if (sum - value >= value) {
    return cal(sum, value + value, count + 1)
  }
  return { count, mod: sum - value }
}
function divide(dividend: number, divisor: number): number {

  let symbol = 0
  let dividendNum = dividend
  let divisorNum = divisor
  if (dividend < 0) {
    dividendNum = 0 - dividend
    symbol++
  }
  if (divisor < 0) {
    symbol++
    divisorNum = 0 - divisor
  }

  let left = dividendNum
  const data = []
  while (left >= divisorNum) {
    const { count, mod } = cal(left, divisorNum)
    left = mod
    data.push(count)
  }
  const result: number = data.reduce((total, value) => {
    let i = value
    let k = 1
    while (i > 0) {
      k += k;
      i--
    }
    return total + k
  }, 0)
  const rest = symbol === 1 ? 0 - result : result
  if (rest > 2147483647 || rest < -2147483648) return 2147483647
  return rest
}
// @lc code=end
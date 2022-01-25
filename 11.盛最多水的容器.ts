/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (62.30%)
 * Likes:    3098
 * Dislikes: 0
 * Total Accepted:    605.8K
 * Total Submissions: 974.5K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [1,1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：height = [4,3,2,1,4]
 * 输出：16
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：height = [1,2,1]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */
import { data } from './data'
// @lc code=start
/**
 * 
 * @param a [index,height]
 * @param b [index,height]
 * @returns 
 */
const getArea = (a: number[], b: number[]) => {
  const width = Math.abs(a[0] - b[0])
  const height = Math.min(a[1], b[1])
  return width * height
}
function maxArea(height: number[]): number {
  let max = 0
  let step: number[] = [0, 0]
  let left = 0
  for (let i = 0; i < height.length; i++) {
    const h = height[i]
    let j = i + 1
    if (i < step[0] && h < step[1]) {
      j = step[0]
    }
    if (h <= left) continue
    for (; j < height.length; j++) {
      const area = getArea([i, h], [j, height[j]])
      if (area > max) {
        max = area
        step = [j, height[j]]
        left = area / (height.length - i)
      }
    }
  }
  return max
};
// @lc code=end


const maxArea1 = (height: number[]) => {
  const size = height.length;
  let left = 0, right = size - 1;
  let ans = 0;
  while (left < right) {
    ans = Math.max(ans, getArea([left, height[left]], [right, height[right]]));
    if (height[left] > height[right]) --right;
    else ++left;
  }
  return ans;
}
console.time('1')
console.log(maxArea([...data]))
console.timeEnd('1')
console.time('2')
console.log(maxArea1([...data]));
console.timeEnd('2')

/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.05%)
 * Likes:    4161
 * Dislikes: 0
 * Total Accepted:    753.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result:number[][] =[]
  for(let i=0;i<nums.length;i++){
    const left = result.reduce((total,item)=>{
      const index = item.indexOf(nums[i])
      switch (index){
        case 0 :{
          total.add(item[1]).add(item[2]);
          break;
        }
        case 1 :{
          total.add(item[0]).add(item[2]);
          break;
        }
        case 2 :{
          total.add(item[0]).add(item[1]);
          break;
        }
        default:break;
      }
      return total
    },new Set())
    for(let j=i+1;j<nums.length;j++){
      if(left.has(nums[j])) continue;
      const s = nums[i]+nums[j]
      const l = -s
      for(let k=j+1;k<nums.length;k++){
        if(nums[k]===l){
          left.add(nums[j]).add(nums[k])
          result.push([nums[i],nums[j],nums[k]])
          break;
        }
      }
    }
  }
  return result
}
// @lc code=end
console.log(threeSum([-1,0,1,0]));
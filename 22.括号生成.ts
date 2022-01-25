/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.29%)
 * Likes:    2241
 * Dislikes: 0
 * Total Accepted:    396.4K
 * Total Submissions: 512.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
const insert=(str:string,index:number)=>{
    const before = str.slice(0,index)
    const after = str.slice(index,str.length)
    return before+'()'+after
  }
function generateParenthesis(n: number): string[] {
  const arr:Set<string> =new Set()
  if(n===1) return ['()']
  const fill=(str='()',start=0)=>{
    for(let i=start;i<str.length;i++){
      const a = insert(str,i)
      if(a.length===2*n){
        arr.add(a)
      }else{
        fill(a,start+1)
      }
    }
  }

  fill()
  return Array.from(arr)
}
// @lc code=end

console.log(generateParenthesis(8));

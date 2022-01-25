/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let sum = 0;
  let i =s.length-1;
  while(s[i]===' '){
    i--
  }
  while(s[i]!==' '&&i>=0){
    i--
    sum++
  }
  return sum
};
// @lc code=end
// console.log(lengthOfLastWord("a"));
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord( "luffy is still joyboy"));
// console.log(lengthOfLastWord( "luffy is still joyb"));

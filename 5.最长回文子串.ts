/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (35.85%)
 * Likes:    4549
 * Dislikes: 0
 * Total Accepted:    835.5K
 * Total Submissions: 2.3M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
const isPalindrome = (str: string) => {
  let start = 0;
  let end = str.length - 1
  while (start < end) {
    if (str[start] != str[end]) {
      return false
    }
    start += 1;
    end -= 1
  }
  return true
}
function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i
    let len = 1
    while (s[left] === s[right] && left >= 0 && right <= s.length) {
      len += 2;
      left -= 1;
      right += 1
    }
    if (len > end - start) {
      start = left + 1;
      end = right - 1
    }
    if (s[i] === s[i + 1]) {
      left = i;
      right = i + 1
      len = 2
      while (s[left] === s[right] && left >= 0 && right <= s.length) {
        len += 2;
        left -= 1;
        right += 1
      }
      if (len > end - start) {
        start = left + 1;
        end = right - 1
      }
    }

  }
  return s.slice(start, end + 1)
};
// @lc code=end
//aacabdkacaa aca
// cabaaxcabaax xaabacxcabaax 
//  cbbd bb
console.log(longestPalindrome('xaabacxcabaax'));

// function longestPalindromeJava(s: string) {
//   const len = s.length;
//   if (len < 2) {
//     return s;
//   }

//   let maxLen = 1;
//   let begin = 0;
//   // dp[i][j] 表示 s[i..j] 是否是回文串
//   const dp: boolean[][] = [];
//   // 初始化：所有长度为 1 的子串都是回文串
//   for (let i = 0; i < len; i++) {
//     dp[i] = dp[i] || []
//     dp[i][i] = true;
//   }

//   const charArray: string[] = s.split('');
//   // 递推开始
//   // 先枚举子串长度
//   for (let L = 2; L <= len; L++) {
//     // 枚举左边界，左边界的上限设置可以宽松一些
//     for (let i = 0; i < len; i++) {
//       // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
//       const j = L + i - 1;
//       // 如果右边界越界，就可以退出当前循环
//       if (j >= len) break;

//       if (charArray[i] != charArray[j]) {
//         dp[i][j] = false;
//       } else {
//         if (j - i < 3) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1];
//         }
//       }

//       // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1;
//         begin = i;
//       }
//     }
//   }
//   return s.substring(begin, begin + maxLen);
// }

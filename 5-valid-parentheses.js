//* Link: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    //* Jika char adalah buka, push ke variable stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      console.log({ loopingStack: stack });
    } else {
      //* Jika char adalah tutup, ambil top dari stack
      const top = stack.pop();
      console.log({ top });
      //* Jika stack kosong (top indefined) atau top tidak sesuai pasangan, tidak valid
      if (top !== pairs[char]) {
        return false;
      }
      console.log({ pairs: pairs[char] });
    }
  }
  console.log({ stack });

  return stack.length === 0;
};

console.log(isValid("([)]"));

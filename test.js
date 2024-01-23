var isPalindrome = function (x) {
  let temp = x.toString();
  let length = temp.length;

  for (let i = 0; i < length; i++) {
    let left = i;
    let right = length - i - 1;

    console.log(temp.charAt(left), temp.charAt(right));
  }

  return true;
};

isPalindrome(123);

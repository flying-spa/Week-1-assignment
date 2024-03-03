/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //check if the string is palindrome or not in O(n), n is the length of the string
  str = str.toLowerCase();
  var startPointer = 0;
  var endPointer = str.length-1;

  while(startPointer<=endPointer) {
    if(!(str[startPointer]>='a' && str[startPointer]<='z')) {
      startPointer++;
      continue;
    }
    
    if(!(str[endPointer]>='a' && str[endPointer]<='z')) {
      endPointer--;
      continue;
    }

    if(str[startPointer]!=str[endPointer])
    return false;
    startPointer++;
    endPointer--;
  }

  return true;
}

module.exports = isPalindrome;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //approach 1 -> sort both the strings and compare the, TC: O(nlogn)
  //aproach 2 -> put the contents of the first string into a map and then remove it with second string, TC: O(n)

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length != str2.length)
  return false;

  //approach 1
  sortedStr1 = str1.split('').sort().join('');
  sortedStr2 = str2.split('').sort().join('');
  if(sortedStr1 == sortedStr2)
  return true;

  else 
  return false;

}

module.exports = isAnagram;

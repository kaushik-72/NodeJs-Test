//Write a JavaScript program that checks if a given string is a palindrome.
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  const input = "racecar";
  const isPalindromeResult = isPalindrome(input);
  console.log("Is the string a palindrome? " + isPalindromeResult);
  
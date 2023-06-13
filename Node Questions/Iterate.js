//Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const input = "Hello, World!";
  const vowelCount = countVowels(input);
  console.log("The number of vowels in the string is: " + vowelCount);
  

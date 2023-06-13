//Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.
const fs = require('fs');

const content = ' This is my text.\n';

fs.appendFile('mynewfile1.txt', content, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended to file successfully!');
  }
});

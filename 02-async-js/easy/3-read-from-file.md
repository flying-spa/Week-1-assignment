## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


//reading from a file

const fs = require('fs')
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});


//expensive operation that the js thread will be busy computing
console.log("hello from the js thread");
var sum = 0;
for(var i=0; i<=1000000000; i++) {
    sum += i;
}
console.log(sum);


a.txt
hello this is some random text
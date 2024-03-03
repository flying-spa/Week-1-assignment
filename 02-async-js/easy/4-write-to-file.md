## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


//trying to write into a file

const fs = require('fs');

fs.writeFile("a.txt", "hello, this is text to be written to the file", (err) => {
    if(err) {
        console.log("there was an error while writing into the file");
        return;
    }
});

console.log("data was written into the file successfully");


a.txt
hello, this is text to be written to the file
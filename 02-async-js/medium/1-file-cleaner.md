## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


//read a file that contains a lot of spaces, clean it and write back the content to the same file

const fs = require('fs');

var fileContents = "";
fs.readFile("a.txt", "utf-8", (err, data)=> {
    fileContents = data;
    if(err) {
        console.log("there was an error while reading the file");
        return;
    }
    //asynchronous chaining -> only after one async task is completed, should the next one be called
    cleanedFileContents = cleanFile(fileContents);
    fs.writeFile("a.txt", cleanedFileContents, (err)=> {
        if(err) {
            console.log("there was an error while writing into the file");
        }
    })
    console.log("file content was cleaned and written into the file successfully");
})

//clean the file - basically extract all the words and join them with a space
function cleanFile(fileContents) {
    var splitContents = fileContents.split(" ");
    var answerArray = [];
    for(var i=0; i<splitContents.length; i++) {
        if(splitContents[i]!="") {
            answerArray.push(splitContents[i]);
        }
    }
    var result = answerArray.join(" ");
    return result;
}

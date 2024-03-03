## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


//stop watch implementation without setInterval for a finite number of times

var counter = 1;

for(var i=0;i<100;i++) {
  setTimeout(() => {
    console.clear();
    console.log(counter);
    counter++;
  }, (i+1)*1000);
}


// printing an infinite counter stop watch without setInterval

let counter = 1;

function printAndIncreaseCounter() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printAndIncreaseCounter, 1000);
}

setTimeout(printAndIncreaseCounter, 1*1000);



































































(Hint: setTimeout)
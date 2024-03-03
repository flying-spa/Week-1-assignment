Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)



 // trying to print some clock stories

function printTime() {
    console.clear();
    var current = new Date();
    var hours = current.getHours();
    var amPm = hours>12 ? "PM": "AM";
    hours = hours>12 ? hours-12: hours;
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();

    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
}

setInterval(printTime, 1000);
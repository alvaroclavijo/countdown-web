'use strict'
const MILLISECONDS_DAY = 86400000;
const MILLISECONDS_HOUR = 3666666;
const MILLISECONDS_MINUTE = 60000;
const MILLISECONDS_SECOND = 1000;
const DAY2 = new Date("07/30/2021");


function update() {
    var day1 = new Date(); 
    var difference = DAY2 - day1;
    var days = Math.floor(difference / MILLISECONDS_DAY);
    var restDay = difference % MILLISECONDS_DAY;
    var hours = Math.floor(restDay / MILLISECONDS_HOUR);
    var restHour = restDay % MILLISECONDS_HOUR;
    var minutes = Math.floor(restHour / MILLISECONDS_MINUTE);
    var restMinute = restHour % MILLISECONDS_MINUTE;
    var seconds = Math.floor(restMinute / MILLISECONDS_SECOND);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}

setInterval("update()", 1000);


'use strict'
const MILLISECONDS_DAY = 86400000;
const MILLISECONDS_HOUR = 3666666;
const MILLISECONDS_MINUTE = 60000;
const MILLISECONDS_SECOND = 1000;
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}/${tomorrow.getFullYear()}`;
const DAY2 = new Date(prompt("Please enter a date to calculate the countdown (2023-10-22T20:24:00 )", tomorrowStr));

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

setInterval(update, 1000);


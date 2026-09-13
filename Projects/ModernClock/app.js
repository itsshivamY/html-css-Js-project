function updateClock(){

const now=new Date();

const sec=now.getSeconds();
const min=now.getMinutes();
const hr=now.getHours();

document.getElementById("second").style.transform=
`translateX(-50%) rotate(${sec*6}deg)`;

document.getElementById("minute").style.transform=
`translateX(-50%) rotate(${min*6}deg)`;

document.getElementById("hour").style.transform=
`translateX(-50%) rotate(${hr*30+min/2}deg)`;

const days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

document.getElementById("date").innerHTML=now.getDate();
document.getElementById("month").innerHTML=months[now.getMonth()];
document.getElementById("day").innerHTML=days[now.getDay()];

}

setInterval(updateClock,1000);
updateClock();
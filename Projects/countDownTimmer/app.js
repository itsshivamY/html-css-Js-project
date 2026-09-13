const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const title = document.getElementById("title");

let timer;

function format(num){
    return num < 10 ? "0" + num : num;
}

startBtn.addEventListener("click",()=>{

    clearInterval(timer);

    let d = Number(document.getElementById("inputDays").value)||0;
    let h = Number(document.getElementById("inputHours").value)||0;
    let m = Number(document.getElementById("inputMinutes").value)||0;
    let s = Number(document.getElementById("inputSeconds").value)||0;

    let totalSeconds = d*86400+h*3600+m*60+s;

    if(totalSeconds<=0){
        alert("Enter Valid Time");
        return;
    }

    title.innerHTML="⏳ Countdown Started";

    timer=setInterval(()=>{

        let day=Math.floor(totalSeconds/86400);
        let hour=Math.floor((totalSeconds%86400)/3600);
        let minute=Math.floor((totalSeconds%3600)/60);
        let second=totalSeconds%60;

        days.innerHTML=format(day);
        hours.innerHTML=format(hour);
        mins.innerHTML=format(minute);
        secs.innerHTML=format(second);

        totalSeconds--;

        if(totalSeconds<0){

            clearInterval(timer);

            title.innerHTML="🎉 Time's Up!";

            days.innerHTML="00";
            hours.innerHTML="00";
            mins.innerHTML="00";
            secs.innerHTML="00";
        }

    },1000);

});

stopBtn.addEventListener("click",()=>{

    clearInterval(timer);

    days.innerHTML="00";
    hours.innerHTML="00";
    mins.innerHTML="00";
    secs.innerHTML="00";

    document.getElementById("inputDays").value="";
    document.getElementById("inputHours").value="";
    document.getElementById("inputMinutes").value="";
    document.getElementById("inputSeconds").value="";

    title.innerHTML="⏹ Countdown Stopped";

});
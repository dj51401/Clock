function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var milTime = document.getElementById("twelve-hr-time").checked;


    if(milTime){
        
        document.getElementById("timer").innerHTML = militaryTime(second, minute, hour);

    }
    else{
        document.getElementById("timer").innerHTML = twelveHrTime(second, minute, hour);
    }

    setInterval(showTime, 1000);
}

function twelveHrTime(sec, min, hour){
    if(hour > 12){
        hour -= 12;
    }
    if(hour == 0){
        hour = 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec;

    return time;
}

function militaryTime(sec, min, hour){
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec;

    return time;
}
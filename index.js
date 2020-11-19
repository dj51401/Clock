
function showTime(){
    var militarytime = false;
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    var checkbox = document.getElementsByClassName("checkbox");


    if(checkbox[1].checked == true){
        var time =  hour + ":" + minute + ":" + second;
        session = "";
    }
    else{
        if(hour == 0){
            hour = 12;
            session = " AM";
        }
    
        if(hour > 12){
            hour = hour - 12;
            session = " PM";
        }
    }


    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time =  hour + ":" + minute + ":" + second + session;

    document.getElementById("timer").innerHTML = time;

    setTimeout(showTime, 1000);
}

function setAlarm(){
    var checkbox = document.getElementsByClassName("checkbox");
    var alarmTime = document.getElementById("alarm-time").value;
        console.log(alarmTime);

    document.getElementById("alarm-timer").innerHTML = alarmTime;
}
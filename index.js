function showTime(){
    var militarytime = false;
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var checkbox = document.getElementById("checkbox");

    if(checkbox.checked == true){
        var time =  hour + ":" + minute + ":" + second;
    }
    else{
        if(hour == 0){
            hour = 12;
        }
    
        if(hour > 12){
            hour = hour - 12;
        }
        var time =  hour + ":" + minute + ":" + second;
    }


    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time =  hour + ":" + minute + ":" + second;

    document.getElementById("timer").innerHTML = time;

    setTimeout(showTime, 1000);
}
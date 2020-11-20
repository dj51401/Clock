function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    document.getElementById("time").innerHTML = getTime(h,m,s);

    setInterval(showTime, 1000);
}

function getTime(h,m,s){

    var time = h + ":" + m + ":" + s;
    return time;
}
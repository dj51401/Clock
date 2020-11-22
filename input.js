
function showAlarm(){
    document.getElementById("time-card").style.display = "none";
    document.getElementById("alarm-card").style.display = "block";
}

function showTimeCard(){
    document.getElementById("time-card").style.display = "block";
    document.getElementById("alarm-card").style.display = "none";
}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var hr24format = document.getElementById("checkbox").checked;

    if(hr24format){
        document.getElementById("time").innerHTML = getTime(h,m,s);   
    }else{
        document.getElementById("time").innerHTML = getTime(
            h=(h>12) ? h-=12 : h , m, s,
        );        
    }

    function getTime(h,m,s){

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    
        var time = h + ":" + m + ":" + s;
        return time;
    }

    setInterval(showTime, 1000);

}

var navOpen = true; 

function settingsPanel(btn){

    btn.classList.toggle("change");

    if(togglePanel()){
        var allSettings = document.getElementsByClassName("settings-section");
        for(i = 0; i < allSettings.length; i++){
            allSettings[i].style.width = "96px";
        }
        document.getElementsByClassName("time-card-content")[0].style.marginLeft = "96px";
        document.getElementsByClassName("alarm-card-content")[0].style.marginLeft = "96px";
        document.getElementsByClassName("setting-container")[0].style.opacity = "0";
        document.getElementsByClassName("setting-container")[0].style.transitionDelay = "0s";
    } else {
        var allSettings = document.getElementsByClassName("settings-section");
        for(i = 0; i < allSettings.length; i++){
            allSettings[i].style.width = "200px";
        }
        document.getElementsByClassName("time-card-content")[0].style.marginLeft = "200px";
        document.getElementsByClassName("alarm-card-content")[0].style.marginLeft = "200px";
        document.getElementsByClassName("setting-container")[0].style.opacity = "100";
        document.getElementsByClassName("setting-container")[0].style.transitionDelay = ".2s";
    }

    function togglePanel(){
        if(navOpen == undefined){
            navOpen = false;
        }
        if(navOpen == false){
            navOpen = true;
        }
        else if(navOpen == true){
            navOpen = false;
        }

        return navOpen;
    }
}
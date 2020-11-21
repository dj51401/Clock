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
        document.getElementById("settings-section").style.width = "96px";
        document.getElementById("time-card-content").style.marginLeft = "96px";
        document.getElementsByClassName("setting-container")[0].style.opacity = "0";
        document.getElementsByClassName("setting-container")[0].style.transitionDelay = "0s";
    } else {
        document.getElementById("settings-section").style.width = "200px";
        document.getElementById("time-card-content").style.marginLeft = "200px";
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
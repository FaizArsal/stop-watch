var hours = 00;
var min = 00;
var sec = 00;
var msec = 00;
var hourHeading = document.getElementById("hours")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec=00
    }
    else if(sec>=60){
        min++
        minHeading.innerHTML=min
        sec = 00
    }
    else if(min>=60){
        hours++
        hourHeading.innerHTML = hours
        min = 00
    }

}


function start(){
    interval = setInterval(timer,10)
    var start = document.getElementById("play")
    start.disabled = true
    start.style.color = "red"
    var stop = document.getElementById("stop")
    stop.style.color = "royalblue"
    var reset = document.getElementById("reset")
    reset.style.color = "royalblue"
}

function pause(){
    clearInterval(interval)
    var start = document.getElementById("play")
    start.disabled = false
    start.style.color = "royalblue"
    var stop = document.getElementById("stop")
    stop.style.color = "red"
    var reset = document.getElementById("reset")
    reset.style.color = "royalblue"
}

function restart(){
    hours="00"
    min = "00"
    sec="00"
    msec="00"
    hourHeading.innerHTML=hours
    minHeading.innerHTML=min
    secHeading.innerHTML=sec
    msecHeading.innerHTML=msec
    clearInterval(interval)
    var start = document.getElementById("play")
    start.disabled = false
    start.style.color = "royalblue"
    var stop = document.getElementById("stop")
    stop.style.color = "royalblue"
    var reset = document.getElementById("reset")
    reset.style.color = "red"
}

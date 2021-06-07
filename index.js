let timeP = document.getElementById("timeP")

updateTime()
setInterval(updateTime, 1000)

function updateTime() {
    let now = new Date;
    let hour = now.getUTCHours()+4
    let minute = now.getUTCMinutes()+20
    let second = now.getUTCSeconds()

    let postfix = "AM";

    if (minute>=60) {
        minute = minute-60
        hour += 1
    }

    if (hour>=24) {
        hour-24
    }
    if (hour>=12) {
        postfix = "PM"
        if (hour>12) {
            hour-=12
        }
    }

    if (String(hour).length<2) {
        hour = hour
    }
    if (String(minute).length<2) {
        minute = "0"+minute
    }
    if (String(second).length<2) {
        second = "0"+second
    }
    
    

    timeP.innerText = hour+":"+minute+":"+second+" "+postfix   
}
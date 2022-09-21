const hours = document.getElementById("hours-num");
const minutes = document.getElementById("minutes-num");
const seconds = document.getElementById("seconds-num");
const ampm = document.getElementById("ampm-label");

function update_clock(){

    h = new Date().getHours(); 
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    am_or_pm = "am"

    if (h > 12){
        am_or_pm = "pm";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = am_or_pm;

    setTimeout(() => {
        update_clock();
    }, 1000)
}

update_clock();
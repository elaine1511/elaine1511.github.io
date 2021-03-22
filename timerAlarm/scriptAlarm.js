/* need event handler for go button that reads the seconds and sets timer for that number of seconds, 
then calls function to change background-color */

function pageLoad() {
    document.getElementById("go").onclick = goClick;
}

function goClick() {
    setTimeout(countDown, 1000);
}

/**
 * make the textbox count down the seconds
 * get the current value and reduce it to 0
 * if value is 0 cancel the timer
 */
function countDown() {
    secondTextbox = document.getElementById("sec");
    const second = +document.getElementById("sec").value;
    if (second > 0) {
        secondTextbox.value = second - 1;
        setTimeout(countDown, 1000);
    } else {
        alarm();
    }
}

//turn red when timer is end
function alarm() {
    const bodyElement = document.getElementById("body");
    bodyElement.className = "awesome";
}


window.onload = pageLoad;
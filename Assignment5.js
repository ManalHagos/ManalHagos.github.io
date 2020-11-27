// variables initialization, the initial time interval is 0.2 second
var interval = 2000;
var score = 0;
var timmer;
var bugImg;
// constant function will keep updating the bug position
window.onload = function start() {
    bugImg = document.getElementById("bug");
    bugImg.addEventListener("click", getBug, false);
    update();
}

function update() {
    document.getElementById('scoreDiv').innerHTML = score;
    timmer = window.setInterval(setBugPosition, interval);
}

function setBugPosition() {
    bugImg.style.left = Math.random() * 650 + "px";
    bugImg.style.top = Math.random() * 400 + "px";
    bugImg.addEventListener("click", getBug, false);
}


//the balloon caught method which can be used to display the ballon caught event and
//reduce the time interval
function getBug() {
    document.getElementById("smashed").style.visibility = "visible";
    bugImg.removeEventListener("click", getBug, false);
    bugImg.style.left = Math.random() * 650 + "px";
    bugImg.style.top = Math.random() * 400 + "px";
    score = score + 10;
    document.getElementById('scoreDiv').innerHTML = score;
    interval = interval - 100;
    clearInterval(timmer);
    timmer = window.setInterval(setBugPosition, interval);
    setTimeout(function () {
        document.getElementById("smashed").style.visibility = "hidden";
    }, 500);
    document.getElementById("smashed").innerHTML = "Wow!You smite the lady bug!";



}
//The reset method which will be used to reset the score of the current game
function resetScore() {
    score = 0;
    document.getElementById('scoreDiv').innerHTML = score;
    alert("You reset the score.");
}
//the reset speed method which will be used to reset the current game time interval to the initial time rate
function resetSpeed() {
    interval = 2000
    timmer = window.setInterval(setBugPosition, interval);
    clearInterval(timmer);
    alert("You reset the speed.");
}
function simulateClick() {
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var cb = document.getElementById("checkbox"); //element to click on
    var canceled = !cb.dispatchEvent(evt);
    if (canceled) {
        // A handler called preventDefault
        alert("canceled");
    } else {
        // None of the handlers called preventDefault
        alert("not canceled");
    }
}
document.getElementById("button").addEventListener('click', simulateClick);



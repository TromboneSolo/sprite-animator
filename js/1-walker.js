var tID;
var position = 256;
function animateScript() {
    var interval = 100;
    tID = setInterval(() => {
        document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
        if (position < 1536) {
            position = position + 256;
        }
        else {
            position = 256;
        }

    },
        interval);
}

function stopAnimation() {
    clearInterval(tID);
}
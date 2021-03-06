function sprite(options) {
    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.totalFrames = options.totalFrames;
    that.image = options.image;

    that.shift = 0;
    that.currentFrame = 1;

    that.render = function () {
        that.context.clearRect(120, 25, 300, 300);
        that.context.drawImage(that.image, that.shift, 0, that.width, that.height, 120, 25, that.width, that.height);
       
       if (that.currentFrame == that.totalFrames) {
           that.shift = 0;
           that.currentFrame = 1;
       }
       else {
           that.shift += that.width + 1;
           that.currentFrame++;
       }
       
       
        requestAnimationFrame(that.render);
    }
    return that;
}


var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var myImage = new Image();
myImage.src = "images/Luigi-128-Hammer-sprite-sheet.png";
myImage.addEventListener("load", loadImage, false);

function loadImage(e) {
    var mySprite = new sprite({
        "context": context,
        "width": 79,
        "height": 79,
        "totalFrames": 5,
        "image": myImage
    });
    mySprite.render();
}
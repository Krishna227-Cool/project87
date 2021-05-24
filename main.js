var canvas = new fabric.Canvas("myCanvas");
var blockimageHeight = 30;
var blockimageWidth = 30;
playerx = 10;
playery = 10;
var playerobject = "";
function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    }
    );
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObject=Img;
        blockImgObject.scaleToWidth(blockimageWidth);
        blockImgObject.scaleToHeight(blockimageHeight);
        blockImgObject.set({
            top: playery, 
            left: playerx
        });
        canvas.add(blockImgObject);
    });
};

 window.addEventListener("keydown", my_KeyDown);
 function my_KeyDown(e) {
     keyPressed = e.keyCode;
     console.log("keyPressed");
     if (e.shiftKey == true && keyPressed == "80") {
        console.log("p and shift are both pressed")
        blockimageWidth = blockimageWidth + 10; 
        blockimageHeight = blockimageHeight + 10;
        document.getElementById("current-width").innerHTML=blockimageWidth;
        document.getElementById("current-height").innerHTML=blockimageHeight;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("m and shift are both pressed")
        blockimageWidth = blockimageWidth - 10; 
        blockimageHeight = blockimageHeight - 10;
        document.getElementById("current-width").innerHTML=blockimageWidth;
        document.getElementById("current-height").innerHTML=blockimageHeight;
    }
    if (keyPressed == '38') {
        up();
        console.log("up is pressed")
    }
    if (keyPressed == '40') {
        down();
        console.log("down is pressed")
    }
    if (keyPressed == '37') {
        left();
        console.log("left is pressed")
    }
    if (keyPressed == '39') {
        right();
        console.log("right is pressed")
    }
    if (keyPressed == '70') {
        newImage('ironman_face.png');
        console.log("f is pressed")
    }
    if (keyPressed == '66') {
        newImage('spiderman_body.png');
        console.log("b is pressed")
    }
    if (keyPressed == '76') {
        newImage('hulk_legs.png');
        console.log("l is pressed")
    }
    if (keyPressed == '82') {
        newImage('thor_right_hand.jpg');
        console.log("r is pressed")
    }
    if (keyPressed == '72') {
        newImage('captin_america_left_hand.png');
        console.log("h is pressed")
    }
 }

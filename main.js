function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,115,100,400,300);
    fill('red');
    stroke('yellow');
    circle(50,50,90);
    circle(590,50,90);
    circle(50,430,90);
    circle(590,430,90);
    fill('violet');
    stroke('blue');
    rect(90,30,457,30);
    rect(90,410,457,30);
    rect(40,90,30,300);
    rect(570,90,30,300);
}
function take_snapshot(){
 save("MyPicture.png");
}
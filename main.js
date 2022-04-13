var noseX=0;
var noseY=0;

function preload(){
clownnose=loadImage("https://i.postimg.cc/qM0yCkmP/Clown-nose.png");
}
function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,noseX-10,noseY-10,30,30);

}
function takeSnapshot(){
    save("Myimage.png");
}
function modelloaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= "+noseX);
    console.log("noseY= "+noseY);

}
}
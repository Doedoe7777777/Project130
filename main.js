var scoreRightWrist = "";


var scoreLeftWrist = "";

var music = "music.mp3";

var music = "music2.mp3";

leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload()
{
    music = loadSound("music.mp3");
	music = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    results[0].pose.keypoints[9].score;
    if (results.length > 0) {
        console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY)

       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY)
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    circle(100, 110, 20);

    if (scoreLeftWrist > 0.2) {
        
        Circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume
        song.setVolume(volume);
        }
}

function isPlaying()
{
   var showStatus = "music.mp3";
   if (scoreLeftWrist > 0.2) {
    leftWristX = 
   }
}
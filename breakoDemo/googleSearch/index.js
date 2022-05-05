let canvas1 = document.getElementById("canvas1");
let color = "red";
let color0 = "none";
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
let video = document.getElementById("video");
let canvas = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");
let currentlocation;
let poses = [];
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
      video.play();
    });
  }
  
  function drawCameraIntoCanvas() {
    video.onload = function up(){
      ctx.drawImage(video, 0, 0, 640, 480);
  }
  
    drawKeypoints();

    window.requestAnimationFrame(drawCameraIntoCanvas);
  }
  
  drawCameraIntoCanvas();

  const poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  
  function gotPoses(results) {
    poses = results;
  }
  
  function modelReady() {
    poseNet.multiPose(video);
  }
  function drawKeypoints() {
        if(poses.length>0){
        ctx.beginPath();
        ctx.arc(poses[0].pose.nose.x, poses[0].pose.nose.y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        currentlocation = poses[0].pose.nose.x
        }
        
      } 

      if (currentlocation <300){

        drawSquare();
        setTimeout( function(){
            alert( '5 second passed' );
          }, 5000 );
    
       }



function drawSquare(){
let i=0;
ctx1.beginPath();
ctx1.lineWidth = "2";
ctx1.strokeStyle = color;
  if(i===0){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(20, 20, 50, 50);//draw about
    ctx1.stroke();
  }


}

  

var video = document.getElementById("video");
var canvas = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
let i = 0;
let next = 0;

let poses = [];
let pose;
let starttime;
let endtime;

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
  // drawSkeleton();
  window.requestAnimationFrame(drawCameraIntoCanvas);
}
drawCameraIntoCanvas();

// Create a new poseNet method with a single detection
const poseNet = ml5.poseNet(video, modelReady);
poseNet.on("pose", gotPoses);

// A function that gets called every time there's an update from the model
function gotPoses(results) {
  poses = results;
  
  // console.log(poses);
  if(poses.length>0){
    pose = poses[0].poses
  }
}

function modelReady() {
  // console.log("model ready");
  poseNet.multiPose(video);
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
      if(poses.length>0){
      ctx.beginPath();
      ctx.arc(poses[0].pose.nose.x, poses[0].pose.nose.y, 10, 0, 2 * Math.PI);
      ctx.stroke();
      
      if (poses[0].pose.nose.x <300){
        
setTimeout(() => {
  // drawsquare();
  show(next),5000;
  
   },5000)

      console.log(next);

      

      }
      
      // //going right
      // setInterval(function recheckposition(){

      //   if (poses[0].pose.nose.x <300){
      //     drawsquare();
      //     console.log(next);
      //     // setTimeout(changeToRight(), 10000);
      //   }
      // }, 8000)
      
      //going left
    } 
    

}
// }


// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    // For every skeleton, loop through all body connections
    for (let j = 0; j < poses[i].skeleton.length; j += 1) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      ctx.beginPath();
      ctx.moveTo(partA.position.x, partA.position.y);
      ctx.lineTo(partB.position.x, partB.position.y);
      ctx.stroke();
    }
  }
  
}

let canvas1 = document.getElementById("canvas1");
let color = "red";
let color0 = "none";
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
// ctx1.clearRect(0, 0, canvas1.width, canvas1.height);


// let about = ctx1.rect(20, 20, 50, 50);
// let store = ctx1.rect(80,20,50,50);
// let gmail = ctx1.rect(1150,20,50,50);
// let images = ctx1.rect(1200,20,50,50);
// let menu = ctx1.rect(1260,20,50,50);
// let login = ctx1.rect(1320,20,60,50);
// let typein = ctx1.rect(420,260,600,50);
// let googlesearch = ctx1.rect(590,330,120,50);
// let Imfeelinglucky = ctx1.rect(720,330,120,50);

// let selection = [about, store, gmail, images, menu, login, typein, googlesearch, Imfeelinglucky];
function drawsquare()
{
  
  if(next<9){
    next= next + 1
  } else if(next >8){
    next = 8;
  }
  

}

function show(i){

ctx1.beginPath();
ctx1.lineWidth = "2";
ctx1.strokeStyle = color;

  if(i===0){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(20, 20, 50, 50);//draw about
    ctx1.stroke();

  }else if(i===1){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(80,20,50,50);//draw store
    ctx1.stroke();
  } else if(i===2){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(1150,20,50,50);
    ctx1.stroke();
  }else if(i===3){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(1200,20,50,50);
    ctx1.stroke();
  }else if (i===4){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(1260,20,50,50);
    ctx1.stroke();
  }else if (i===5){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(1320,20,60,50);
    ctx1.stroke();
  }else if (i===6){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(420,260,600,50);
    ctx1.stroke();
  }else if (i===7){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(590,330,120,50);
    ctx1.stroke();
  }else if (i===8){
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);
    ctx1.rect(720,330,120,50);
    ctx1.stroke();
  }
  
if(i<9){
  i= i + 1;
  next=i;
} else if(i >8){
  i = 8;
  next=i;
}
}









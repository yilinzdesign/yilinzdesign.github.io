


let canvas1 = document.getElementById("canvas1");
let color = "red";
let color0 = "none";
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
// ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
ctx1.beginPath();
ctx1.lineWidth = "2";
ctx1.strokeStyle = color;
let about = ctx1.rect(20, 20, 50, 50);
let store = ctx1.rect(80,20,50,50);
let gmail = ctx1.rect(1150,20,50,50);
let images = ctx1.rect(1200,20,50,50);
let menu = ctx1.rect(1260,20,50,50);
let login = ctx1.rect(1320,20,60,50);
let typein = ctx1.rect(420,260,600,50);
let googlesearch = ctx1.rect(590,330,120,50);
let Imfeelinglucky = ctx1.rect(720,330,120,50);


ctx1.stroke();




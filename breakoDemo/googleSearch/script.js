let canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

// ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
ctx1.beginPath();
ctx1.lineWidth = "4";
ctx1.strokeStyle = "green";
ctx1.rect(20, 20, 150, 100);
ctx1.fill();
ctx1.stroke();

alert('hi?');

var canvas = document.getElementById("can");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");

var x = Math.random() * innerWidth;
var dx = 3;
var y = Math.random() * innerHeight;
var dy = 3;
var radius = 30;

// run correctly
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI*2, false);
// c.fillStyle = "gold";
// c.strokeStyle = "green";
// c.fill();
// c.stroke();

// function animate(){
//   requestAnimationFrame(animate);
//   c.beginPath();
//   c.arc(x, 200, 30, 0, Math.PI*2, false);
//   c.fillStyle = "gold";
//   c.strokeStyle = "green";
//   c.fill();
//   c.stroke();

//   x+=1;
// }

// animate();
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);
  c.beginPath();
  c.arc(x,y,radius,0, Math.PI * 2, false);
  c.fillStyle = "gold";
  c.strokeStyle = "green";
  c.fill();
  c.stroke();
  if(x+radius > innerWidth || x-radius < 0){
     dx = -dx;
  }
  if(y+radius > innerHeight || y-radius < 0){
    dy = -dy;
 }
  x += dx;
  y += dy;
}
animate();
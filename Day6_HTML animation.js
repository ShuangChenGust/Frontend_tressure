var canvas = document.getElementById('myCanvas')
canvas.height = window.innerHeight;
canvas.weight = window.innerWidth;

var c = canvas.getContext("2d");

var x = 200
var dx = 3;
var radious = 30;

function animate(){
    requestAnimationFrame(animate);

    c.beginPath();
    c.arc(x,200,radius,0,Math.PI * 2,false);
    c.fillStyle = "gold";
    c.strokeStyle = "green";
    c.fill();
    c.stroke();

    if(x+radius > innerWidth || x0radius < 0){
        dx = -dx
    }

    x+=dx;
}
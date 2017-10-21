var stick = new Image();

var posX = 0,
    posY = 400;

var vx = 0,
    vy = 0;

var areaH = 0;

var squareX = 200,
    squareY = 30;

var ctx = document.getElementById('canvas').getContext('2d');

var step = 0,
    left = 0,
    right = 0;

function init() {

stick.src = 'img/stick.png';

window.requestAnimationFrame(draw);
};

function draw() {
  // vx = 5; // avance auto
  vy += .3;

  posX += vx;
  posY += vy;

  if (posY < 0 ) {
      posY = 0;
  }else if(posY > 400){
      posY = 400;
  }

  if (posX >= 1000) {
      posX = 0;
    }else if (posX < 0) {
      posX = 1000;
    }


ctx.clearRect(0, 0, 1000, 500); // clear canvas

// DECOR -----------------------------------------
ctx.beginPath();
ctx.fillRect(0,470,1000,43);
ctx.fillStyle = "#228E1A";

ctx.save();

ctx.fillRect(0,457,1000,15);
ctx.closePath();
ctx.fillStyle = "#9B4800";
ctx.stroke();

ctx.save();

ctx.arc(850,70,60,0,Math.PI*2,true);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(170, 80);
ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = 'white';
ctx.fill();
ctx.strokeStyle = '#8ED6FF';
ctx.stroke();

ctx.restore();
//----------------------------------------------

if(left == 1){
  ctx.drawImage(stick, step*60, 60, 60, 60, posX, posY, 60, 60);
  console.log(vy);
}else if(right == 1){
  ctx.drawImage(stick, step*60, 0, 60, 60, posX, posY, 60, 60);
  console.log(vy);
}
else if (vy < 0){
  ctx.drawImage(stick, step*60, 120, 60, 60, posX, posY, 60, 60);
  console.log(vy);
}else{
  ctx.drawImage(stick, step*60, 0, 60, 60, posX, posY, 60, 60);
}

if(vx == 0){
  step = 0;
}else{
  step++;
}
if(step >= 15){
  step = 1;
}

window.requestAnimationFrame(draw);
}

// DEPLACEMENT --------------------------------
document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowUp":
            if(posY == 400){
            vy = -5;
          }
            break;
        case "ArrowRight":
            vx = 5;
            right = 1;
            left = 0;
            break;
        case "ArrowLeft":
            vx = -5;
            left = 1;
            right = 0;
            break;
        // case "ArrowDown":
        //     vy = 5;
        //     break;
        default:
            break;
    }
}
document.onkeyup = function(e) {
    switch (e.key) {
        case "ArrowUp":
            vy = 0;
            break;
        case "ArrowRight":
            vx = 0;
            break;
        // case "ArrowDown":
        //     vy = 0;
        //     break;
        case "ArrowLeft":
            vx = 0;
            break;
        default:
            break;
    }
}

//-----------------------------------------
init();



let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

// c.fillRect(100,100,100,100);
// c.fillRect(500,100,100,100);
// c.fillRect(300,300,100,100);
// c.fillRect(700,300,100,100);
// c.fillRect(900,100,100,100);
// c.fillRect(1100,300,100,100);


// c.fillStyle = 'rgba(100,200,1,0.4)';
// c.fillRect (100,100,100,100);

// c.beginPath();
// c.moveTo(200,200);
// c.lineTo(300,50);
// c.lineTo(400,200);
// c.closePath();
// c.strokeStyle='rgba(150,100,1,0.9)';
// c.stroke();
// console.log(canvas);
// c.fillStyle='rgba(255,0,0,0.9)';
// c.fillRect(200,150,220,300);

// c.fillStyle='rgba(100,255,255,0.8)';
// c.fillRect(260,30,100,100);
// c.clearRect(280,50,20,20);
// c.strokeStyle='rgba(100,255,255,0.8)';
// c.strokeRect(282,52,15,15);


// c.clearRect(320,50,20,20);
// c.strokeStyle='rgba(100,255,255,0.8)';
// c.strokeRect(322,52,15,15);

// c.fillStyle = 'rgba(255,255,255)';

// c.beginPath();
// c.moveTo(200,151);
// c.lineTo(100,200);
// c.lineTo(220,250);
// c.strokeStyle='yellow';
// c.stroke();


// c.beginPath();
// c.moveTo(420,151);
// c.lineTo(530,210);
// c.lineTo(400,250);
// c.strokeStyle='yellow';
// c.stroke();

// c.fillStyle = "yellow";
// c.fillRect(302,130,15,20);


// for(var i=0;i<10;i++){
// 	x = Math.random() * window.innerWidth;
// 	y= Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,50,0,Math.PI * 2,false);
// 	// r= Math.floor(Math.random()*255);
// 	// g= Math.floor(Math.random()*255);
// 	// b = Math.floor(Math.random()*255);
// 	function getRandomColor() {
//   	var letters = '0123456789ABCDEF';
//   	var color = '#';
//   	for (var i = 0; i < 6; i++) {
//     	color += letters[Math.floor(Math.random() * 16)];
//   		}
//   	return color;
// 	}
//     c.strokeStyle = getRandomColor();
// 	c.stroke();


// }
// Animated Circle Part - 1
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.7) * 7;
// var dy = (Math.random() - 0.7) * 7;
// var radius = 50;

// function animate(){
// 	requestAnimationFrame(animate);
// c.clearRect(0,0,innerWidth,innerHeight);
// c.beginPath();
// c.arc(x,y,radius,0,Math.PI * 2, false);

// c.strokeStyle = "red";
// console.log("x: "+ x, 'y: '+y);
// c.stroke();
//  if(x + radius > innerWidth || x - radius < 0){
//  	dx = -dx;
//  }
//  if(y + radius > innerHeight || y - radius < 0){
//  	dy = -dy;
//  }
//  x += dx;
//  y += dy;
// }
// animate();


//Animated circle Part - 2 Object oriented

var mouse = {
	x : undefined,
	y : undefined
}

window.addEventListener('mousemove',
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
	})
window.addEventListener('resize',
	function(){
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
		init();
	})


var maxRadius = 70;
// var minRadius = 5;
var color_array =['#0b2349',
					'#b05e1b',
					'#ffffff',
					];
function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = color_array[Math.floor(Math.random() * color_array.length)]
	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
		c.fillStyle = this.color;
		console.log("x: "+ this.x, 'y: '+this.y);
		c.stroke();
		c.fill();


	}
	this.update = function(){
		this.draw(); 
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
		 	this.dx = -this.dx;
		 }
		 if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
		 	this.dy = -this.dy;
		 }
		 this.x += this.dx;
		 this.y += this.dy;
		// Interactive using mouse event
		
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){

			if(this.radius < maxRadius){
				this.radius += 1;
			}
		} else if(this.radius > this.minRadius){
			this.radius -= 1;
		}
		
		}

}
var circleArray = [];
function init(){

   circleArray = [];
	for(var i=0; i< 700; i++){
	 	var x = Math.random() * (innerWidth - radius * 2) + radius ;
		var y = Math.random() * (innerHeight - radius * 2) + radius ;
		var dx = (Math.random() - 0.5) * 7;
		var dy = (Math.random() - 0.7) * 5;
		var radius = Math.random() * 4 + 1;

	circleArray.push(new Circle(x,y,dx,dy,radius));
}

}

function animate(){
	requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
for(var i=0; i< circleArray.length; i++){
	circleArray[i].update();
}



}
console.log("Connected!");
init();
animate();
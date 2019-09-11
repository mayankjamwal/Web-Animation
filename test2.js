const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

function randomIntFromRange(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function randomColor(colors){
    return colors[Math.floor(Math.random() * colors.length)];


}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
});

addEventListener('click', () => {
    init()
});
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
});
var gravity = 2;
var friction = 0.79;
// Objects
function Circle(x, y, dx,dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color


this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
};

this.update = function() {
    
    
    if(this.y + this.radius + this.dy> canvas.height){
        this.dy = -this.dy * friction;
    }else {
        this.dy += gravity;
    }

    console.log("y : "+this.y , 'dy: '+this.dy);
    if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0){
        this.dx = - this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw()
};

}

// Implementation
// let objects
var circle;
var balls;
function init() {
    // objects = []
    balls =[];
    for(var i = 0 ; i < 200 ; i++){
        var radius = randomIntFromRange(10,40);
        var x = randomIntFromRange(radius,canvas.width - radius);
        var y = randomIntFromRange(0,canvas.height - radius);
        var dx = randomIntFromRange(-2,2);
        var dy = randomIntFromRange(-2,3);
        var color = randomColor(colors);
        balls.push(new Circle(x,y,dx,dy,radius,color));   
     
    }
        
   

    // for (let i = 0; i < 10; i++) {
    //     // objects.push()
        
    // }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < balls.length; i++){
        balls[i].update();    
    }
    
    // objects.forEach(object => {
    //  object.update()
    // })
}

init()
animate()

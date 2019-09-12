// import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

//Utility functions

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
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})
addEventListener('click', () => {
    init()
})
var gravity = 0.1;
// Objects
function Drops(x1,x2, y1,y2, color) {
    this.x1 = x1
    this.y1 = y1
    this.dy = randomIntFromRange(1,5)
    this.x2 = x2
    this.y2 = y2
    this.color = color


this.draw = function() {
    c.beginPath()
    c.moveTo(this.x1,this.y1)
    c.lineTo(this.x2,this.y2)
    c.closePath()
    c.strokeStyle = this.color
    c.stroke()
   
}

this.update = function() {

    this.y2 += this.dy
    this.y1 += this.dy
    this.dy += gravity;
    if(this.y1 > innerHeight){
        this.y1 = Math.random();
        this.y2 = this.y1 + randomIntFromRange(10,20);
        this.dy = randomIntFromRange(1,5);
    }
    this.draw()
}
}
// Implementation
let objects;

function init() {
    objects = []

    for (let i = 0; i <1300; i++) {
        // objects.push()
        var x1 = Math.random() * innerWidth ;
        var x2 = x1;
        var y1 = Math.random() * innerHeight;
        var y2 = y1 + randomIntFromRange(10,20);    
        objects.push(new Drops(x1,x2,y1,y2,'green'))

    }
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    for(var i = 0; i < objects.length; i++){
        objects[i].update();    
    }
   
 

 //     Drops.forEach(drop => {
 //      Drops.update()
 // })
}

init();
animate();

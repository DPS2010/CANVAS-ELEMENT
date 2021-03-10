var canvas = document.getElementById("myCanvas")    
var ctx = canvas.getContext("2d")
var colour = "blue"
var lineWidth = 5
//Code for drawing the circle
ctx.beginPath()
//Begins a path, or resets the current path for drawing anything. It tells the canvas to start drawing the shape/object.
ctx.strokeStyle=colour
ctx.lineWidth=lineWidth
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
//Code for adding eventListener
canvas.addEventListener("mousedown", circle)
function circle(e){
    colour = document.getElementById("color").value;
    lineWidth = document.getElementById("number").value
     mouseX= e.clientX-canvas.offsetLeft
     mouseY=e.clientY-canvas.offsetTop
     ctx.beginPath()
     ctx.strokeStyle=colour
     ctx.lineWidth=lineWidth
     ctx.arc(mouseX,mouseY,40,0,2*Math.PI)
     ctx.stroke()

}
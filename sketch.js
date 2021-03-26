const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;


function setup(){
    box = new Box()
    keyPressed()
}

function keyPressed(){
    if (keyCode === 32){
        slingsShot.attach(this.polygon);
    }
}

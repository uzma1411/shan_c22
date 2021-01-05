const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var obj;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic: true
  }

  obj = Bodies.rectangle(150,380,75,75,options);
  World.add(myworld,obj);

  console.log(obj);
  console.log(obj.position.x);
  console.log(obj.position.y);
 
}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(obj.position.x, obj.position.y,400,30);

}
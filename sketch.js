
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg 
var car1
var car2
var car3
function preload(){
bg = loadImage("city.avif")

}



function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  car1 = new Cars(100,500)
  car2 = new Cars(500,450)
  car3 = new Cars(800,400)
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  car1.display();
  car2.display();
  car3.display();
}


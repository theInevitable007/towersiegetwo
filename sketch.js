const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;

var block8;
var block9;
var block10;
var block11;
var block12;

var block13;
var block14;
var block15;

var block16;

var base;
var shooter;
var slingshot;


var gameState = "onSling";



function preload() {
  
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


   //level1 one
  block1 = new Box(480,275,30,40);
  block2 = new Box(300,275,30,40);
  block3 = new Box(330,275,30,40);
  block4 = new Box(360,275,30,40);
  block5 = new Box(390,275,30,40);
  block6 = new Box(420,275,30,40);
  block7 = new Box(450,275,30,40); 
 
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top 
  block16 = new Box(390,155,30,40);   

  //base
  base = new BaseClass(385,295,325,10);

  //shooter
  shooter = new Shooter(750,205,40,40);
   

    slingshot = new SlingShot(shooter.body,{x:200, y:50});
}

function draw(){
    background("white")
    Engine.update(engine);
    

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

    shooter.display();
   
    base.display();

    slingshot.display();    
}

function mouseDragged(){
    gameState
    if (gameState ==="onSling"){
        Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && shooter.body.speed < 1){
        shooter.trajectory = [];
        Matter.Body.setPosition(shooter.body,{x : 200, y : 50})
        slingshot.attach(shooter.body);
        gameState = "onSling";     
    }
    
}
function destroy(){
    if(block1.body.speed >= 1){
        block1.x = 8000
   }
   if(block2.body.speed >= 1){
       block2.x = 8000
   }
   if(block3.body.speed >= 1){
       block3.x = 8000
  }
  if(block4.body.speed >= 1){
      block5.x = 8000
  }
  if(block6.body.speed >= 1){
   block6.x = 8000
}
if(block7.body.speed >= 1){
  block7.x = 8000
}
if(block8.body.speed >= 1){
   block8.x = 8000
}
if(block9.body.speed >= 1){
  block9.x = 8000
}
if(block10.body.speed >= 1){
   block10.x = 8000
}
if(block11.body.speed >= 1){
  block11.x = 8000
}
if(block12.body.speed >= 1){
   block12.x = 8000
}
if(block13.body.speed >= 1){
  block13.x = 8000
}
if(block14.body.speed >= 1){
   block14.x = 8000
}
if(block15.body.speed >= 1){
  block15.x = 8000
}
if(block16.body.speed >= 1){
   block16.x = 8000
}
}

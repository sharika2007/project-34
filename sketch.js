const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var backgroundImg;
var box21;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1400,700);
  

    engine = Engine.create();
    world = engine.world;
    // create sprites here
    ground = new Ground(500,500,1100,10);
    
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
  
    box7 = new Box(800,100,70,70);
    box8= new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11= new Box(800,100,70,70);
    box12= new Box(800,100,70,70);
  
    box13= new Box(700,100,70,70);
    box14= new Box(700,100,70,70);
    box15= new Box(700,100,70,70);
    box16= new Box(700,100,70,70);
    
    box17= new Box(1000,100,70,70);
    box18= new Box(1000,100,70,70);
    box19= new Box(1000,100,70,70);
    box20= new Box(1000,100,70,70);

    block21= new Box1(1100,190,30,30);
    
     ball= new Ball(200,200,50,50);
    rope = new Rope(ball.body,{x:500,y:180});
    

  
}

function draw() {
  background(backgroundImg);
  //drawSprites();
  Engine.update(engine);
  
  ground.display();
  
  block21.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ball.display();
  rope.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  stand1=new Ground(600,200,250,10);
  stand2=new Ground(950,100,250,10);

    box1 = new Box(660,100,30,31);
    box2 = new Box(630,90,40,70);
   
    
    box3 = new Box(599,100,70,70);
    box4 = new Box(920,10,70,70);
    

   

    box5 = new Box(1000,10,70,70);
   


    ball = new Ball(100,100,30,30);
chain=new Chain(ball.body,{x:100,y:175});
}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    stand2.display();

    box3.display();
    box4.display();
   

    box5.display();
    

    chain.display();

    ball.display();
    
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
chain.fly();




}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, stand1, stand2
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15
var polygon1, launcher1
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,640);
   engine = Engine.create();
   world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1=new Ground(490,400,330,20)
    stand2=new Ground(885,250,250,20)

block1=new Box(400,350,60,70)
block2=new Box(460,350,60,70)
block3=new Box(520,350,60,70)
block4=new Box(580,350,60,70)

block5=new Box(430,280,60,70)
block6=new Box(490,280,60,70)
block7=new Box(550,280,60,70)

block8=new Box(460,210,60,70)
block9=new Box(520,210,60,70)

block10=new Box(820,205,60,70)
block11=new Box(880,205,60,70)
block12=new Box(940,205,60,70)

block13=new Box(850,135,60,70)
block14=new Box(910,135,60,70)

block15=new Box(880,65,60,70)
polygon1=new polygon(235,420,30); 
launcher1=new launcher(polygon1.body,{x:235,y:420})




}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    stand1.display()
    stand2.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()

    polygon1.display()
    launcher1.display()
    
    detectollision(polygon1,block1);
    detectollision(polygon1,block2);
    detectollision(polygon1,block3);
    detectollision(polygon1,block4);
    detectollision(polygon1,block5);
    detectollision(polygon1,block6);
    detectollision(polygon1,block7);
    detectollision(polygon1,block8);
    detectollision(polygon1,block9);
    detectollision(polygon1,block10);
    detectollision(polygon1,block11);
    detectollision(polygon1,block12);
    detectollision(polygon1,block13);
    detectollision(polygon1,block14);

}

function mouseDragged()
{
	Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
   
}

function detectollision(lpolygon,lblock){

  blockBodyPosition=lblock.body.position
  polygonBodyPosition=lpolygon.body.position
  
  var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  
  	if(distance<=lblock.r+lpolygon.r)
    {
     
  	  Matter.Body.setStatic(lpolygon.body,false);
    }

  }
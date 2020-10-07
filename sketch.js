const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
  
var plinkos = [];
var divisions = [];
var particles = [];
  
var particle;

var divisionsHeight = 150;

var gameState = "play";
//var gameState = "end";

var score = 0;
var turn = 0;
var count;
function setup(){

var canvas = createCanvas(700, 600);
engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,height,width,20);

for(var j = 30; j<= width; j = j+50){
plinkos.push(new Plinko(j , 100))
}

for(var j = 15; j<= width-10; j = j+50){
plinkos.push(new Plinko(j ,150))
}

for(var j = 30; j<= width-10; j = j+50){
plinkos.push(new Plinko(j ,200))
}

for(var j = 15; j<= width-10; j = j+50){
plinkos.push(new Plinko(j ,250))
}

for(var j = 30; j<= width-10; j = j+50){
plinkos.push(new Plinko(j ,300))
}

for(var j = 15; j<= width-10; j = j+50){
plinkos.push(new Plinko(j ,350))
}
            
for(var k = 10; k <=width; k = k+80){
divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
}

}

function draw(){ 

if(frameCount % 60 === 0){
particle = new Particle(random(120, 500), 0, 7, random(0, 360));
particles.push(particle);
}

background(220,220,220);

textSize(25);
fill(0);
text("Score: " + score ,550,70);

textSize(20);
text(500,30,575);

text(500,110,575);
text(500,190,575);
text(100,270,575);
text(100,350,575);
text(100,430,575);
text(200,510,575);
text(200,590,575);
    
//ground.display(); 
Engine.update(engine);

for(var i = 0; i < particles.length; i++){
particles[i].display();
}
    
for(var k = 0; k<divisions.length;k++){
divisions[k].display();
}
    
for(var j = 0; j<plinkos.length;j++){
plinkos[j].display();
}


    
ground.display();   
    
console.log(plinkos.length);
    
if(particle!=null){
particle.display();
    
if (particle.body.position.y>300)
{
    

if (particle.body.position.x < 300) 
{
    score=score+500;      
    particle=null;
    if ( count>= 5) gameState ="end";                          
}

else if(particle.body.position.x>301 && particle.body.position.x <600){
score = score+100;
particle=null;
if ( count>= 5) gameState ="end";  
}  
else if(particle.body.position.x>601 && particle.body.position.x <900){
score = score+200;
particle=null;
if ( count>= 5) gameState ="end";  
}   
/*if(turn>= 5){
gameState = "end";
}*/
    

}
     
/*function mousePressed(){
if(gameState!=="end"){
turn++
particle = new Particle(mouseX,10,10,10)
}
}*/

}

}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
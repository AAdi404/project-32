const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var grass;
var engine;
var world;
var dustbin;
var paper;
var background1;
var background2;
function preload(){
background1=loadImage("bg1.png");
background2=loadImage("bg2.png");
getBackgroundImg();
}
function setup(){
createCanvas(800,400);
//imageMode(CENTER);
engine=Engine.create();
world=engine.world;
Engine.run(engine);
grass=new Ground(600,400,1200,20);
paper=new Paper(400,0,10,10);
}
function draw(){
//imageMode(CENTER);
if(background1){
background(background1);
}
Throw();
grass.display();
paper.display();
}
function Throw(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.5});
}
}
async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
       if(hour>=06 && hour<=19){
           bg = "bg1.png";
       }
       else{
           bg = "bg2.jpg";
       }
    
       backgroundImg = loadImage(bg);
       console.log(backgroundImg);
    }
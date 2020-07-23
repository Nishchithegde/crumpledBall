const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var paperball,dustbin, dustbinIMG;
var bin1, bin2, bin3;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    dustbinIMG = loadImage("sprites/dustbingreen.png")
}

function setup(){
    var canvas = createCanvas(1350,630);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height-45,1350,40);

    paperball = new PaperBall(100, 570);

    bin1 = new DustBin(1100,height-130,120,PI);
    bin2 = new DustBin(1200,height-130,120,PI);
    bin3 = new DustBin(1150,height-70,100,PI/2);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();

    paperball.display();
    bin1.display();
    bin2.display();
    bin3.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:200,y:-110});
    }
  }
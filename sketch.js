const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1500, 20);

  hero = new Hero(100,50,250);
  rope = new Rope(hero.body, { x: 700, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(750, 100, 70, 70);
  box10 = new Box(750, 100, 70, 70);
  box11 = new Box(750, 100, 70, 70);
  box12 = new Box(750, 100, 70, 70);
  box13 = new Box(750, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
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

  hero.display();
  rope.display();
  monster.display();
  textSize(20);
  fill("white");
  text("Drag the mouse to move the SuperHero!", 200,200);
}


function mouseDragged(){
  Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

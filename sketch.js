
var backgroundImage1, backgroundImage2, backgroundImage3, back;
var blue_guy, blue_guy_dead, blue_guy_attack, blue_guy_lazy, blue_guy_lazier, blue_guy_move_front,blue_guy_move_back, strike, shoot;
var annoying_dragon, just_dragon;
var dragon_fire1,dragon_fire2, dragon_fire3, dragon_fire1, dragon_flames, Im_on_fire, im_breathing_fire;
var edges;
var life;
var wait;


function preload(){
  backgroundImage1 = loadImage("assets/half destroyed castle.jpg");
  backgroundImage2 = loadImage("assets/Normal castle.jpg");
  backgroundImage3 = loadImage("assets/totally destroyed castle.jpg");
  blue_guy_attack = loadAnimation("assets/blue guy attack 1.1.png","assets/blue guy attack 1.2.png","assets/blue guy attack 1.3.png","assets/blue guy attack 1.4.png","assets/blue guy attack 1.5.png","assets/blue guy attack 1.6.png","assets/blue guy attack 1.7.png","assets/blue guy attack 1.8.png","assets/blue guy attack 1.9.png","assets/blue guy attack 1.10.png");
  blue_guy_dead = loadAnimation("assets/blue guy dead 1.1.png","assets/blue guy dead 1.2.png","assets/blue guy dead 1.3.png","assets/blue guy dead 1.4.png","assets/blue guy dead 1.5.png");
  blue_guy_lazy = loadAnimation("assets/blue guy lazy1.1.png","assets/blue guy lazy1.2.png","assets/blue guy lazy1.3.png","assets/blue guy lazy1.4.png","assets/blue guy lazy1.5.png","assets/blue guy lazy1.6.png","assets/blue guy lazy1.7.png","assets/blue guy lazy1.8.png","assets/blue guy lazy1.9.png","assets/blue guy lazy1.10.png");
  blue_guy_move_front = loadAnimation("assets/blue guy move1.1.png","assets/blue guy move1.2.png","assets/blue guy move1.3.png","assets/blue guy move1.4.png","assets/blue guy move1.5.png");
  blue_guy_move_back = loadAnimation("assets/blue guy move1.1 (2).png","assets/blue guy move1.2 (2).png","assets/blue guy move1.3 (2).png","assets/blue guy move1.4 (2).png","assets/blue guy move1.5 (2).png");
  annoying_dragon = loadAnimation("assets/That dragon1.png","assets/that dragon2.png","assets/that dragon3.png","assets/that dragon4.png");
  dragon_fire1 = loadImage("assets/projectile dragon 1.png");
  dragon_fire2 = loadImage("assets/projectile dragon 2.png");
  dragon_fire3 = loadImage("assets/projectile dragon 3.png");
  dragon_fire4 = loadImage("assets/projectile dragon 4.png");
  Im_on_fire = loadImage("assets/Flamy boy.png");
  strike = loadImage("assets/sword_button.png");
  life = loadImage("assets/life.png");
  shoot = loadImage("assets/shoot button.png");
  blue_guy_lazier = loadAnimation("assets/blue guy lazy1.1 (2).png","assets/blue guy lazy1.2 (2).png","assets/blue guy lazy1.3 (2).png","assets/blue guy lazy1.4 (2).png","assets/blue guy lazy1.5 (2).png","assets/blue guy lazy1.6 (2).png","assets/blue guy lazy1.7 (2).png","assets/blue guy lazy1.8 (2).png","assets/blue guy lazy1.9 (2).png","assets/blue guy lazy1.10 (2).png");
}

function setup(){

createCanvas(windowWidth,windowHeight);
back = createSprite(width/2,height/2,width,height);
back.addImage(backgroundImage1);
back.scale= 2;

blue_guy = createSprite(width/2-190,height/2-85);
blue_guy.addAnimation('idle',blue_guy_lazy);
blue_guy.addAnimation('move_front',blue_guy_move_front);
blue_guy.addAnimation('move_back',blue_guy_move_back);
blue_guy.addAnimation('attack',blue_guy_attack);
blue_guy.addAnimation('idler',blue_guy_lazier);
blue_guy.scale=0.3;

button=createImg(strike);
button.position(width/2,height-50);
button.size(50,50);
button.mouseClicked(slice);

button=createImg(shoot);
button.position(width/2+50,height-50);
button.size(50,50);
button.mouseClicked(slice); 

annoying_dragon.frameDelay = 5;

just_dragon = createSprite(width/2+350,height/2-105);
just_dragon.addAnimation('dragon',annoying_dragon);
just_dragon.scale=3;    

edges = createEdgeSprites();

}

function draw(){
  
background("white");

if(keyDown("a")){
  blue_guy.x=blue_guy.x-5;
  blue_guy.changeAnimation('move_front',blue_guy_move_front);
}
else{
  blue_guy.changeAnimation('idle',blue_guy_lazy);
}

if(keyDown("d")){
  blue_guy.x=blue_guy.x+5;
  blue_guy.changeAnimation('move_back',blue_guy_move_back);
}
if(keyDown("w")){
  blue_guy.y=blue_guy.y-5;
}
if(keyDown("s")){
  blue_guy.y=blue_guy.y+5;
}

if(just_dragon.x<0){
  just_dragon.x = width/2+400;
  just_dragon.velocityX = 0

}
spawnFlames();



drawSprites();
    }
    
function spawnFlames(){
  if(frameCount%100 ===0){
    dragon_flames = createSprite(just_dragon.x-300,just_dragon.y);
    dragon_flames.addImage(dragon_fire1);
    dragon_flames.velocityX = Math.round(random(-5,-10));
    dragon_flames.velocityY = Math.round(random(4,6));
  }

  if(frameCount%300===0){
just_dragon.velocityX = Math.round(random(-5,-10));


  }
  }
function slice(){
blue_guy.changeAnimation('attack',blue_guy_attack);
  wait = setTimeout(lazyBack,1000);
 }
 function lazyBack(){
blue_guy.changeAnimation('idle',blue_guy_lazy);
 } 
 



 





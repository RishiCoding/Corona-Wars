const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;
var gameState=0;
var distance=0;

var playerCount, database, form, player, game, allPlayers;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img

function preload(){
  sanitizerImg =loadImage("images/Sanitizer image.png"); 
  maskImg =loadImage("images/mask.png"); 
  liquidImg =loadImage("images/sprayed_liquid.png"); 
  
  backgroundImg = loadImage("images/sky background.png");
  virusImg =loadImage("images/alive virus.jpeg"); 

}
function setup(){
  canvas=createCanvas(displayWidth-70,displayHeight-50);
  
  sanitizer= new Sanitizer(displayWidth-70, displayHeight-50)
 

  
}

function draw(){
  sanitizer.display();
}



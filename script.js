/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
/*

/* instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* border om de auto in de shop*/
let carBorder;
let bigButtonNext;
let bigButtonNextLine;
let raceCarGreenWhite;
let raceCarBlueWhite;
let raceCarPinkWhite;
let menuButton;
let menuButtonLine;
var coinPicture;

var buttonHeight = [600,600,600];
var bigButtonNextHeight = 280;
var purchased = [20, 40, 70];
var coins = 20;

function preload(){
  bigButtonNext = loadImage('bignextbutton.png');
  bigButtonNextLine = loadImage('bignextbuttonline.png');
  menuButton = loadImage('MenuButton.png');
  menuButtonLine = loadImage('MenuButtonLine.png');
  carBorder = loadImage('carborder.png');
  raceCarGreenWhite = loadImage('raceCarGreenWhite.png');
  raceCarBlueWhite = loadImage('donkerblauw.png');
  raceCarPinkWhite = loadImage('rozewit.png');
  coinPicture = loadImage('coinafbeelding.png');
}

function setup() {
  createCanvas(1344, 960);
  loadFont ('Minecraft.ttf', pixelFont => {
    fill('white');
    textFont(pixelFont);
    textSize(36);
  })
}

function draw() {
  background(168,230,29);
  
  if(mouseX > 75 && mouseX < 375){
    if (mouseY > 600 && mouseY < 680) {
      buttonHeight[0] = 595;
      if(mouseIsPressed) {
        buttonHeight[0] = 600;
        if(purchased[0] != false && purchased[0] != true) {
          if(coins-purchased[0] >= 0) {
            coins -= purchased[0];
          purchased[0] = false;
          }
        }
      }
    }else{
      buttonHeight[0] = 600;
    }
  }else {
    buttonHeight[0] = 600;
  }

  if(mouseX > 450 && mouseX < 750){
    if (mouseY > 600 && mouseY < 680) {
      buttonHeight[1] = 595;
      if(mouseIsPressed) {
        buttonHeight[1] = 600;
        if(purchased[1] != false && purchased[1] != true) {
          if(coins-purchased[1] >= 0) {
            coins -= purchased[1];
            purchased[1] = false;
          }
        }
      }
    }else{
      buttonHeight[1] = 600;
    }
  }else {
    buttonHeight[1] = 600;
  }

  if(mouseX > 825 && mouseX < 1125){
    if (mouseY > 600 && mouseY < 680) {
      buttonHeight[2] = 595;
      if(mouseIsPressed) {
        buttonHeight[2] = 600;
        if(purchased[2] != false && purchased[2] != true) {
          if(coins-purchased[2] >= 0) {
            coins -= purchased[2];
            purchased[2] = false;
          }
        }
      }
    }else{
      buttonHeight[2] = 600;
    }
  }else {
    buttonHeight[2] = 600;
  }

  

  if(mouseX > 1200 && mouseX < 1300){
    if (mouseY > 280 && mouseY < 680) {
      bigButtonNextHeight = 275;
      if(mouseIsPressed) {
        
      }
    }else{
      bigButtonNextHeight = 280;
    }
  }else {
    bigButtonNextHeight = 280;
  }

  image(carBorder, 75, 280, 300, 300);
  image(carBorder, 450, 280, 300, 300);
  image(carBorder, 825, 280, 300, 300);

  image(menuButtonLine, 75, 660, 300, 20);
  image(menuButtonLine, 450, 660, 300, 20);
  image(menuButtonLine, 825, 660, 300, 20);

  image(menuButton, 75, buttonHeight[0], 300, 80);
  image(menuButton, 450, buttonHeight[1], 300, 80);
  image(menuButton, 825, buttonHeight[2], 300, 80);
  
  image(raceCarGreenWhite, 173, 342, 104, 176);
  image(raceCarBlueWhite, 548, 342, 104, 176);
  image(raceCarPinkWhite, 923, 342, 104, 176);

  image(bigButtonNextLine, 1200, 665, 100, 15.625);
  image(bigButtonNext, 1200, bigButtonNextHeight, 100, 400); 


  if(purchased[0] != true && purchased[0] != false) {
    text(purchased[0], 230, buttonHeight[0] + 53);
    image(coinPicture, 170, buttonHeight[0] + 20, 40, 40);
  }else if(purchased[0] === false){
    text('Select', 173, buttonHeight[0] + 53);
  }

  if(purchased[1] != true && purchased[1] != false) {
    text(purchased[1], 607, buttonHeight[1] + 53);
    image(coinPicture, 547, buttonHeight[1] + 20, 40, 40);
  }else if(purchased[1] === false){
    text('Select', 550, buttonHeight[1] + 53);
  }
  
  if(purchased[2] != true && purchased[2] != false) {
    text(purchased[2], 984, buttonHeight[2] + 53);
    image(coinPicture, 924, buttonHeight[2] + 20, 40, 40);
  }else if(purchased[2] === false){
    text('Select', 927, buttonHeight[2] + 53);
  }
  
  push();
  textSize(50);
  text(coins, 1150, 95);
  image(coinPicture, 1050, 40, 75, 75);
  pop();
  

  
}
/* paranmeter, function */ 


  




 




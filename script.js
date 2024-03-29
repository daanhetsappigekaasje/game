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
var buttonHeight = [600,600,600];
var bigButtonNextHeight = 280;
var purchaseTekst = ['20 coins', '40 coins', '70 coins'];
var totalCoins = 100;
var moneyCounter = totalCoins;
var coinPicture;

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
        purchaseTekst[0] = 'Selected';
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
        purchaseTekst[1] = 'Select' 
        totalCoins - 10
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
        purchaseTekst[2] = 'Select';
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
  
  text(purchaseTekst[0], 155, buttonHeight[0] + 53);
  text(purchaseTekst[1], 530, buttonHeight[1] + 53);
  text(purchaseTekst[2], 900, buttonHeight[2] + 53);

  text(moneyCounter, 1200, 85);
  image(coinPicture, 1050, 40, 75, 75);

  
}

/* paranmeter, function */ 


  




 




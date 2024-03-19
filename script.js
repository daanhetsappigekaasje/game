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
let buttonNext;
let buttonNextLine;
let raceCarGreenWhite;
let raceCarBlueWhite;
let raceCarPinkWhite;
let menuButton;
let menuButtonLine;
let buttonHeight1 = 600;
let buttonHeight2 = 600;
let buttonHeight3 = 600


function preload(){
  buttonNext = loadImage('buttonnext.png');
  buttonNextLine = loadImage('buttonnextline.png');
  menuButton = loadImage('MenuButton.png');
  menuButtonLine = loadImage('MenuButtonLine.png');
  carBorder = loadImage('carborder.png');
  raceCarGreenWhite = loadImage('raceCarGreenWhite.png');
  raceCarBlueWhite = loadImage('donkerblauw.png')
  raceCarPinkWhite = loadImage('rozewit.png')
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
      buttonHeight1 = 595;
    }else{
      buttonHeight1 = 600;
    }
  }else {
    buttonHeight1 = 600;
  }

  if(mouseX > 450 && mouseX < 750){
    if (mouseY > 600 && mouseY < 680) {
      buttonHeight2 = 595;
    }else{
      buttonHeight2 = 600;
    }
  }else {
    buttonHeight2 = 600
  }

  if(mouseX > 825 && mouseX < 1125){
    if (mouseY > 600 && mouseY < 680) {
      buttonHeight3 = 595;
    }else{
      buttonHeight3 = 600;
    }
  }else {
    buttonHeight3 = 600
  }

  image(carBorder, 75, 280, 300, 300);
  image(carBorder, 450, 280, 300, 300);
  image(carBorder, 825, 280, 300, 300);

  image(menuButton, 75, buttonHeight1, 300, 80);
  image(menuButton, 450, buttonHeight2, 300, 80);
  image(menuButton, 825, buttonHeight3, 300, 80);

  image(menuButtonLine, 75, 640, 300, 20);
  
  image(raceCarGreenWhite, 173, 342, 104, 176);
  image(raceCarBlueWhite, 548, 342, 104, 176);
  image(raceCarPinkWhite, 923, 342, 104, 176);

  image(buttonNextLine, 1200, 384.375, 100, 15.625);
  image(buttonNext, 1200, 280, 100, 400); 
  text('Purchase', 142, buttonHeight1 + 53);
  text('Purchase', 517, buttonHeight2 + 53);
  text('Purchase', 882, buttonHeight3 + 53);
  
}




  




 




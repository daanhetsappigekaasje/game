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
let menuButton;
let menuButtonLine;


function preload(){
  buttonNext = loadImage('buttonnext.png');
  buttonNextLine = loadImage('buttonnextline.png');
  menuButton = loadImage('MenuButton.png');
  menuButtonLine = loadImage ('MenuButtonLine.png');
  carBorder = loadImage('carborder.png');
  raceCarGreenWhite = loadImage ('raceCarGreenWhite.png');
}

function setup() {
  createCanvas(1344, 960);
}

function draw() {
  background(168,230,29);
  image(carBorder, 75, 280, 300, 300);
  image(carBorder, 450, 280, 300, 300);
  image(carBorder, 825, 280, 300, 300);
  image(menuButton, 75, 600, 300, 80);
  image(menuButton, 450, 600, 300, 80);
  image(menuButton, 825, 600, 300, 80);
  image (raceCarGreenWhite, 173, 342, 104, 176 );
  image(buttonNextLine, 1200, 384.375, 100, 15.625);
  image(buttonNext, 1200, 280, 100, 400); 
}

  




 




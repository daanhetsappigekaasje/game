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


function preload(){
  buttonNext = loadImage('buttonnext.png');
  buttonNextLine = loadImage('buttonnextline.png');
  carBorder = loadImage('carborder.png');
}

function setup() {
  createCanvas(1344, 960);
}

function draw() {
  background(168,230,29);
  image(carBorder, 24, 80, 400, 400);
  image(buttonNextLine, 1200, 384.375, 100, 15.625);
  image(buttonNext, 1200, 280, 100, 400);

  if(mouseX > 1200, mouseX < 1300 , mouseY > 280, mouseY < 680)
}

/* car in de shop */


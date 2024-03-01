/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
/*

/* instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* border om de auto in de shop*/
let carBorder

function preload(){
  
  carBorder = createImg('carborder.png');
}

function setup() {
  createCanvas(1344, 960);
}

function draw() {
  background(168,230,29);
  carBorder.position(720 ,80)
  carBorder.size(800,800)
}

/* car in de shop */

let car

function preload(){

}

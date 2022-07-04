"use strict";

/* global XXH */
/* exported --
    p3_preload
    p3_setup
    p3_worldKeyChanged
    p3_tileWidth
    p3_tileHeight
    p3_tileClicked
    p3_drawBefore
    p3_drawTile
    p3_drawSelectedTile
    p3_drawAfter
*/

function p3_preload() {}

function p3_setup() {}

let worldSeed;

function p3_worldKeyChanged(key) {
  worldSeed = XXH.h32(key, 0);
  noiseSeed(worldSeed);
  randomSeed(worldSeed);
}

function p3_tileWidth() {
  return 64;
}
function p3_tileHeight() {
  return 64;
}

let [tw, th] = [p3_tileWidth(), p3_tileHeight()];

let clicks = {};

function p3_tileClicked(i, j) {
  let n = clicks[[i, j]] | 0;
  if(n == 0){
    clicks[[i,j]] = 1;
  }
  else{
    clicks[[i,j]] = 0;
  }
  
}


function p3_drawTile(i, j) {
  push();
  let n = clicks[[i, j]] | 0 % 2;
  let top = clicks[[i, j - 1]] |0 % 2;
  let bot = clicks[[i, j + 1]] |0 % 2;
  let left = clicks[[i - 1, j]] |0 % 2 ;
  let right = clicks[[i + 1, j]] |0 % 2;
  noStroke();
  fill((noise(i, j) * 255))
  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  endShape(CLOSE);
  if (n == 1 && top == 0 && bot == 0 && left== 0 && right == 0) {
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(th/2, tw/2, 40 + noiseVal *10, 40 + noiseVal * 10);
    fill(153, 255, 255, 180);
    ellipse(th/2, tw/2, 20 + noiseVal *5, 20 + noiseVal * 5);
  }
  //connect with top
  else if(n == 1 && top == 1 && bot == 0 && left== 0 && right == 0){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);
  }
  else if(n == 1 && top == 0 && bot == 0 && left== 1 && right == 0){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }
  else if(n == 1 && top == 1 && bot == 1 && left== 0 && right == 1){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);
  }
  else if(n == 1 && top == 1 && bot == 1 && left== 1 && right == 1){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);

    fill(0, 204, 204, 180);
    noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }
  
  else if(n == 1 && top == 1 && bot == 1 && left== 1 && right == 0){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);

    fill(0, 204, 204, 180);
    noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }

  else if(n == 1 && top == 1 && bot == 0 && left== 1 && right == 1){
    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);

    fill(0, 204, 204, 180);
    noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }

  else if(n == 1 && top == 0 && bot == 1 && left== 1 && right == 1){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }

  else if(n == 1 && top == 0 && bot == 0 && left== 1 && right == 1){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);

    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }

  else if(n == 1 && top == 1 && bot == 1 && left== 0 && right == 0){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);
  }
  else if(n == 1 && top == 1 && bot == 0 && left== 0 && right == 1){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);
  }
  else if(n == 1 && top == 0 && bot == 1 && left== 1 && right == 0){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);

    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);
  }
  else if(n == 1 && top == 1 && bot == 0 && left== 1 && right == 0){

    fill(0, 204, 204, 180);
    let noiseVal = noise((mouseX)*0.03, mouseY*0.03);

    ellipse(0, 32, -70 + noiseVal * 10,32 + noiseVal *10,  20);
    fill(153, 255, 255, 180);
    ellipse(0, 32, -35 + noiseVal * 5,16 + noiseVal *5, 20);

    fill(0, 204, 204, 180);
     noiseVal = noise((mouseX)*0.03, mouseY*0.03);
    ellipse(32, 0, 32 + noiseVal *10, -70 + noiseVal * 10, 20);
    fill(153, 255, 255, 180);
    ellipse(32, 0, 16 + noiseVal *5, -35 + noiseVal * 5, 20);
  }


  pop();
}

function p3_drawSelectedTile(i, j) {
  noFill();
  stroke(0, 255, 0, 128);

  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  endShape(CLOSE);

  noStroke();
  fill(0);
  text("(" + [i, j] + ")", 0, 0);
}

function p3_drawAfter() {}

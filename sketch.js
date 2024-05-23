let xBolinha = 300
let yBolinha = 200
let dBolinha = 40

let xvBolinha = 2
let yvBolinha = 2


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  bolinha()
}

function bolinha(){
  circle(xBolinha, yBolinha,dBolinha)
  
}
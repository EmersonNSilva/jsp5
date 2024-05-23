let xBolinha = 300
let yBolinha = 200
let dBolinha = 40

let vxBolinha = 2
let vyBolinha = 2


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  bolinha()
}

function bolinha(){
  circle(xBolinha, yBolinha,dBolinha)
  
  xBolinha = xBolinha + vxBolinha 
  
  if(xBolinha > 600 || xBolinha < 0)
  vxBolinha = vxBolinha * -1
}

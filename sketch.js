const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  // 1- Carregue a imagem dentro da função preload().
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  // 3- Aumente o tamanho da tela para obter uma tela inteira
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //8-  Use a palavra-chave new para criar o objeto tower 
  tower = new Tower(150, 350, 160, 310);
  

}

function draw() {
  background(189);
  //2- Adicione a imagem a ser exibida
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  
  // 9- Use a declaração display para exibir a torre.
 tower.display();
  
 
}




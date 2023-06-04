
// 4. Veja o arquivo Tower.js criado dentro da pasta Js.

class Tower {
//   Vamos criar uma função constructor()
// (construtor) e, dentro da função, vamos escrever
// a instrução para criar um corpo de torre
// retangular
  constructor(x, y, width, height) {

//   6-   Agora, vamos adicionar um parâmetro adicional
// “options” (opções) em Bodies.rectangle(), que
// irá ajustar o mecanismo de física para o objeto e
// adicioná-lo ao mundo.

    var options = {
      isStatic: true
    };

    // 5- Crie um corpo tower dentro da função constructor
    this.image = loadImage("assets/tower.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    // 7- Adicione este objeto ao World (mundo)
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    //10- .Carregue e adicione a imagem da Torre dentro da classe Tower
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

class Game{
    constructor(){

    }
    
  showLife() {
    push();
    image(life, width / 2 - 130, height/5);
    noStroke();
    pop();
  }

}
class Virus extends Sanitizer {
    constructor(x,y){
      super(x,y,100, 100);
      this.image = loadImage("images/alive_virus.png");
      
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      
    }
    
    }
  
  
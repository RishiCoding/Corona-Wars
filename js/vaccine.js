class Vaccine extends Sanitizer {
    constructor(x,y){
      super(x,y,100,100);
      this.image = loadImage("images/vaccine_animation.gif");
      
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      
    }
    
  }
  
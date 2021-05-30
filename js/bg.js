class Bg{
    constructor(x, y, width, height) {
        var options = {
            "isStatic":true,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        this.width = width;
        this.height = height;
        this.image = loadImage("images/sky background.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      eternalMovement(){
        this.image.y=this.image.y+100;
        if(this.image.y>displayHeight-500){
          this.image.y=displayheight/2;
        }
      }
}
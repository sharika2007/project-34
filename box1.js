class Box1 {
    constructor(x, y, r) {
      var options = {
        density: 1, 
        frictionAir: 1
        
      }
      this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      this.box1 = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }
    display(){
      image(this.box1,1100,160,150,150);
      var angle = this.body.angle;
      push();
      
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  
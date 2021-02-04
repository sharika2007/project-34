class Ball {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        frictionAir: 1
    };
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    this.ball=loadImage("images/superhero-01.png");
     World.add(world, this.body);
    }
  
    display() {
     // this.body.position.x=mouseX;
      //this.body.position.y=mouseY;
       image(this.ball,200,50,300,300);
      var angle = this.body.angle;
      push();
      
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
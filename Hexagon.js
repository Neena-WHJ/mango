class Hexagon {
    constructor(x, y,r) {
      var options = {
         'friction':1.0,
          'density':1.0,
          restitution: 0.4
      }
      this.body = Bodies.circle(x, y, r/2 ,options);
     
     
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green")
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  
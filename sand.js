class sand {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':2,
          'density':0.5,
      }
      this.body=Bodies.circle(x, y, 5, options);
      this.radius = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("orange");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      pop();
    }
  };
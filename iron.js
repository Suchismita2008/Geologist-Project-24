class iron {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':0.5,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, 50, 60, options);
      this.width = 50;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };

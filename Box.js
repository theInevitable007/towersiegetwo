class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'isStatic' : false,
          'restitution':0.8,
          'friction':0.08,
          'density':0.02
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      if(this.body.speed >= 1){

         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         World.remove(world, this.body);
       
      }

      push();
      fill("red")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    } 
  }

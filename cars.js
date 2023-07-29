class Cars {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 50;
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.image1 = loadImage("car1.png");
      this.image2 = loadImage("car2.png");
      this.image3 = loadImage("car3.png");
      this.image4 = loadImage("car4.png");
      this.carImage = [this.image1,this.image2,this.image3,this.image4];
      this.x = Math.round(random(0,3));
      World.add(world, this.body);
    }
  
    
  
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
        
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.carImage[this.x], 0, 0, 250,250);
      pop();
  
    }
  }
  
  
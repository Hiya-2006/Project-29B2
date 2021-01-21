class Box  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.9,
        'friction':0.001,
        'density':0.1,
        isStatic:false
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    
    World.add(world, this.body);
  }
    display(){
  
    
      var pos =this.body.position;
     
     
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
  
    }
  }

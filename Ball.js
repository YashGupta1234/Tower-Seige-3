class Ball{
    constructor(x,y){
        var options={
            restitution:0.4,
            friction:0.5,
            density:1.5,
        }
        
        this.body = Matter.Bodies.circle(x,y,40,options);
        
        World.add(world,this.body);
    }
    display(){
       fill("red")
        push();
        ellipse(this.body.position.x, this.body.position.y,60,60);
        pop();
    
      }
    
}
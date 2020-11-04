class PaperClass{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x, y, r/2 , options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("blue")
       imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
      }
}
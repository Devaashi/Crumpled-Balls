class Paperball{
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5,
        };
        this.body=Bodies.circle(x,y,30,options);
        this.radius=60;

        World.add(world, this.body)
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        fill("white");
        rectMode(CENTER)
        circle(pos.x, pos.y, this.radius);
        pop();
    };
    

}
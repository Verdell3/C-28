class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            resitution:0,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body);
   
   
   
    }
    display(){
        var pos = this.body.position;
        
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        //strokeWeight(3);
        fill("white")
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2)
        //ellipse(0,0,this.r, this.r);
        pop()
    }
}
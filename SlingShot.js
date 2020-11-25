class SlingShot{
    constructor(body, pointB){
        var options = {
            bodyA:body,
            pointB:pointB,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body
        this.pointB=pointB
        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);
    }
    attach(body){
        this.SlingShot.bodyA=body;
    }
    fly(){

        this.SlingShot.bodyA = null ;
    }

    display(){
        if(this.SlingShot.bodyA)
        {
        var pointA = this.bodyA.position
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
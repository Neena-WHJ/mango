class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        console.log(bodyA);
        this.pointB = pointB
        this.sling = Constraint.create(options);
        console.log("after" + bodyA);
        this.sling.bodyA=bodyA;
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        console.log(bodyA)
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            line (pointA.x,pointA.y,pointB.x,pointB.y)
            pop ();
        }
    }
    
}
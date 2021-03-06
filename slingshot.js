class SlingShot{
    constructor(bird,point){

      var  options = {
            bodyA: bird ,
            pointB: point,
            length: 4,
            stiffness: 0.02
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

display(){
    if (this.sling.bodyA){
    var posA = this.sling.bodyA.position;
    var posB = this.sling.pointB;
    push ();
    strokeWeight(4);
    line (posA.x,posA.y, posB.x, posB.y);
    pop ();
    }
}
 
fly(){

    this.sling.bodyA = null;

}

}
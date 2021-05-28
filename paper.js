class Paper{
    constructor(x,y,r){
        var options={
            isStatic : false ,
            restitution : 0.3 , 
            friction : 0 ,
            density : 1.2
        }
        
        this.image=loadImage("paper.png");
        this.r=r;
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);

    }
    display(){

        var pos=this.body.position;

        push();
        translate (pos.x,pos.y);
        
        image(this.image,0,0,1.5*this.r,1.5*this.r)
        pop();


    }

}
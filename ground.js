class ground{
constructor(x,y,width,height){
var options={
   isStatic:true
}
 this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
}
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
        
      }

}
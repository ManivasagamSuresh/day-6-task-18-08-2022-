class Circle {
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
       
    }
    setRad(r){
        this.radius=r;
    }
    setClr(c){
        this.colour=c;
    }
 
 getRadius(){
     return (` radius of ${this.colour} circle is ${this.radius}`)
 }
 getArea(){
     let area = Math.PI * Math.pow(this.radius,2);
     return area;
 }
 getCircumference(){
     let Circum = 2 * Math.PI * this.radius;
     return Circum;
    
 }
 
}
let circle1 = new Circle("2","red");
let circle2 = new Circle("3","blue");

console.log(circle2.getRadius());
console.log(circle1.getArea());
console.log(circle2.getArea());
circle1.setRad(5);
console.log(circle1.getArea());
circle2.setClr("black");
console.log(circle2.getRadius());
console.log(circle2.getCircumference())
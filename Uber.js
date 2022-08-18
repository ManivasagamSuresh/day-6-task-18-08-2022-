class Uber{
    constructor(carmodel,distance,waitingtime,rate){
        this.carmodel=carmodel;
        this.distance= distance;
        this.waitingtime=waitingtime;
        this.rate=rate;
    }
setDistance(dist){
        this.distance=dist;

}
setWait(wait){
            this.waitingtime=wait;
        }
    
getRideDetails(){
        return(`The Model of car is ${this.carmodel} , Distance of the ride is ${this.distance} with waiting period of 
        ${this.waitingPeriod} and rate of ${this.rate}`)
    }
getRate(){
        let totalRate = (this.distance * this.rate)+ (this.waitingtime * 5)
        return totalRate;
    }
}
let customer1= new Uber ("innova",100,10,25);
let customer2= new Uber ("swift",100,10,15);
let customer3= new Uber ("Amaze",100,10,20);
console.log(customer3.getRate());
console.log(customer1.getRate());
console.log(customer2.getRideDetails());
customer1.setDistance(250);
console.log(customer1.getRate)
console.log(customer2.getRate());
customer2.setWait(15);
console.log(customer2.getRate());
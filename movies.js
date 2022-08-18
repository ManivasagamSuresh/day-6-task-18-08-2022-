class Movies {
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    
        
 getMoviedetails(){
     return(`The name of the movie is ${this.title} produced by ${this.studio} has rating ${this.rating} `);
 }
 
}
let movie1 = new Movies("vikram","RKP","9.0");
let movie2 = new Movies("master","sun","8.0");
let movie3 = new Movies("valimai","zee","8.0");

console.log(movie3.getMoviedetails());

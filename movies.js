class Movies {
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    setRat(){
        
    }
        
 getMoviedetails(){
     return(`The name of the movie is ${this.title} produced by ${this.studio} has rating ${this.rating} `);
 }
 getRating(){
     return(` The rating of ${this.title} is ${this.rating}`);
 }
 
}
let movie1 = new Movies("vikram","RKP","9.0");
let movie2 = new Movies("master","sun","8.0");
let movie3 = new Movies("valimai","zee","8.0");
let movie4 = new Movies("Casino royale","EON production","PG13");

console.log(movie3.getMoviedetails());



//  The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
    getMoviedetails(){
         return(` The rating of ${this.title} is ${this.rating}`);
    }
}
let movie5 = new movies("vikram","RKP");
console.log(movie5.getMoviedetails());

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title,
        this.studio=studio,
        this.rating=rating
    }
    getPG(){
        if(this.rating=="PG"){
            return this.rating
        }
    }
}
const movie1 = new Movie("Casino Royale","Eon Production","PG13")
const movie2 = new Movie("Casino Royale","Eon Production","PG")
const movie3 = new Movie("Casino Royale","Eon Production")
console.log(movie1)
console.log(movie1.getPG())
console.log(movie2.getPG())
console.log(movie3.getPG())
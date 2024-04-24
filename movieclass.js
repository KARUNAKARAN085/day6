class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title,
        this.studio=studio,
        this.rating=rating
    }
}
const movie = new Movie("Casino Royale","Eon Production","PG13")
console.log(movie)
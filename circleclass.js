class Circle{
    constructor(radius=1.0,color="red"){
        this.radius=radius,
        this.color=color
    }
    get gradius(){
        return this.radius
    }
    set gradius(radiusvalue){
        this.radius=radiusvalue
    }
    get gcolor(){
        return this.color
    }
    set gcolor(color){
        this.color=color
    }
    toString(){
        console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`)
    }
    get getarea(){
        return (Math.PI)*(this.radius*this.radius)
    }
    get getCircumference(){
        return 2*(Math.PI)*this.radius
    }
}
const movie = new Circle()
console.log(movie)
movie.radius=4
console.log(movie.gradius)
movie.gcolor="yellow"
console.log(movie.gcolor)
movie.toString()
console.log("Area=",movie.getarea)
console.log("Circuference=",movie.getCircumference)
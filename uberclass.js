class Uber{
    constructor(distance=0,){
        this.distance=distance
    }
    price(){
        return this.distance*5
    }
    set setprice(distance){
        this.distance=distance
    }
}
const uber =new Uber(10)
console.log(uber)
// let consider the cost of uber for 1km=5 
console.log(uber.price())
uber.setprice=50
console.log(uber.price())

import { Car } from "./module1.js";

function getCarInstance(){
    return new Car();
}

function printCar(car){
    console.log(car);
}

function init(){
    let car = (getCarInstance());
    printCar(car);
}
document.body.onload = init();
"use strict";
const car = {
    brand: "Audi",
    doors: 3
};
function switchBrand(car) {
    car.brand = "Mercedes";
}
switchBrand(car);
console.log(car);

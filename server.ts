const car = {
  brand: "Audi",
  doors: 3
}

function switchBrand(car: {brand: string; doors: number}){
  car.brand = "Mercedes"
}

switchBrand(car)
console.log(car)
"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    priceReal() {
        return `R$${this.price}`;
    }
}
const kindle = new Product('KINDLE', 800);
console.log(kindle.priceReal());

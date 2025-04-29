class Product {
  name: string
  price: number

  constructor(name: string, price: number){
    this.name = name
    this.price = price
  }

  priceReal() {
    return`R$${this.price}`
  }
}

const kindle = new Product('KINDLE', 800)

console.log(kindle.priceReal())
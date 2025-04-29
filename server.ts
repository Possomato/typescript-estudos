class Book{
  author: string

  constructor(author: string){
    this.author = author
  }
}

class Chapters{
  numberOfChapters: number

  constructor(numberOfChapters: number){
    this.numberOfChapters = numberOfChapters
  }
}

function searchProduct(search: string){
  if(search === 'Odyssey'){
    return new Book('Homero')
  }

  if(search === 'The Hobbit'){
    return new Chapters(30)
  }

  return null
}

const newBook = searchProduct('The Hobbit')

if(newBook instanceof Book){
  console.log(newBook.author)
}

if(newBook instanceof Chapters){
  console.log(newBook.numberOfChapters)
}
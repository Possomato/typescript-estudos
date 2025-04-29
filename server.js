"use strict";
class Book {
    constructor(author) {
        this.author = author;
    }
}
class Chapters {
    constructor(numberOfChapters) {
        this.numberOfChapters = numberOfChapters;
    }
}
function searchProduct(search) {
    if (search === 'Odyssey') {
        return new Book('Homero');
    }
    if (search === 'The Hobbit') {
        return new Chapters(30);
    }
    return null;
}
const newBook = searchProduct('The Hobbit');
if (newBook instanceof Book) {
    console.log(newBook.author);
}
if (newBook instanceof Chapters) {
    console.log(newBook.numberOfChapters);
}

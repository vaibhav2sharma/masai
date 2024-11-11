class Book {
  #isbbn;

  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.#isbbn = isbn;
    this.availableCopies = availableCopies;
  }

  get availableCopies() {
    return this.availableCopies;
  }

  set availableCopies(copies) {
    if (copies >= 0) {
      this.availableCopie = copies;
    } else {
      console.log("no copies");
    }
  }

  static #validateISBN(isbn) {
    const isbnRegex = /^(d{10})/;
    return isbnRegex.test(isbn);
  }

  set isbn(newIsbn) {
    if (Book.#validateISBN(newIsbn)) {
      this.#isbbn = newIsbn;
    } else {
      console.log("wrong isbn");
    }
  }

  get isbn() {
    return this.#isbbn;
  }

  displayBookInfor() {
    return `Title:${this.title},Author:${this.author},ISBN:${
      this.#isbbn
    },available copies :${this.availableCopies}`;
  }
}

class Library {
  constructor() {
    this.Books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.Books.push(book);
    } else {
      console.log("invalid book");
    }
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  searchBook(query) {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  displayBooks() {
    return this.books.map((book) => book.displayBookInfor().join("\n"));
  }
}

const book1 = new Book("hello", "bye", 12456, 8);
const book2 = new Book("hello", "bye", 12456, 8);

const library = new Library();

library.addBook(book1);
library.addBook(book2);

console.log(library.displayBooks());

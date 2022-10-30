let myLibrary = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ` +
           `${this.isRead ? "Has been read" : "not read yet"}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooksInTable() {
    let booksTable = document.querySelector(".books-container");
    for (const book of myLibrary) {
        let bookRow = createRow(book);
        booksTable.appendChild(bookRow);
    }
}

function createRow(book) {
    let row = document.createElement('tr');

    let title = document.createElement('td');
    title.innerText = book.title;

    let author = document.createElement('td');
    author.innerText = book.author;

    let pages = document.createElement('td');
    pages.innerText = book.pages;

    let isRead = document.createElement('td');
    isRead.innerText = book.isRead ? "Read" : "Not read";

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(isRead);

    return row;
}

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295)

addBookToLibrary(theHobbit)
displayBooksInTable()

console.log(theHobbit.info());

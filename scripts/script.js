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

    let title = createCell(book.title);
    let author = createCell(book.author);
    let pages = createCell(book.pages);
    let isRead = createCell(book.isRead ? "Read" : "Not read");

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(isRead);

    return row;
}

function createCell(text) {
    let cell = document.createElement('td');
    cell.innerText = text
    return cell;
}

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295)

addBookToLibrary(theHobbit)
displayBooksInTable()

console.log(theHobbit.info());

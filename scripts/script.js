let myLibrary = []

document.querySelector("#add-book-button")
        .addEventListener('click', addBookToLibrary);

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

function addBookToLibrary(event) {
    event.preventDefault();
    let book = new Book(
        document.querySelector("#title-field").value, 
        document.querySelector("#author-field").value, 
        document.querySelector("#pages-field").value, 
    );
    book.isRead = document.querySelector("#isRead-field").checked
    myLibrary.push(book)
    displayBooksInTable()
}

function displayBooksInTable() {
    let booksTable = document.querySelector(".books-container");
    let tableBody = booksTable.querySelector("tbody")
    let booksElems = myLibrary.map(book => createRow(book)) 
    tableBody.replaceChildren(...booksElems)
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
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

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead
}

// Add a book to the library with its information taken
// from the form
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

// Displays the books contained in the globabl books array
// inside the books table.
function displayBooksInTable() {
    let booksTable = document.querySelector(".books-container");
    let tableBody = booksTable.querySelector("tbody")
    let booksElems = myLibrary.map((book, i) => createRow(book, i)) 
    tableBody.replaceChildren(...booksElems)
}

// Create a table row containing book info and buttons
function createRow(book, index) {
    let row = document.createElement('tr');

    let title = createCell(book.title);
    let author = createCell(book.author);
    let pages = createCell(book.pages);
    let isRead = createCell(book.isRead ? "Read" : "Not read");
    let deleteButton = createDeleteButton(index);

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(isRead);

    let toggleReadButton = createToggleReadButton(index);
    isRead.appendChild(toggleReadButton);

    let buttonsCell = document.createElement('td');
    buttonsCell.appendChild(deleteButton)
    row.appendChild(buttonsCell);

    return row;
}

// Creates a table cell containing supplied text
function createCell(text) {
    let cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}

// Create a button responsible for deleting the book with 
// the particular index from the library
function createDeleteButton(index) {
    let button = document.createElement('button');
    button.textContent = "Delete"
    button.classList.add("danger");
    button.addEventListener('click', e => deleteBook(index));
    return button;
}

// Delete the book with the specified index
function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooksInTable();
}

function createToggleReadButton(index) {
    let button = document.createElement('button');
    button.textContent = "Toggle"
    button.classList.add("toggle");
    button.addEventListener('click', e => toggleRead(index));
    return button;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooksInTable();
}
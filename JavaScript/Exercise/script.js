//Array to store objects
let myLibrary = [];

//Object Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return (title + author +", " + pages + ", " + read);    
    // }
}

// Function for adding a new book to array/Library
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

// const theHobbit = new Book("The Hobbit", " by J.R.R Tolkein", "295 pages", "not read yet")
// console.log(theHobbit.info());

// function to dispaly library array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //Remove all previously displayed cards before I loop array again 
    const removeDivs = document.querySelectorAll(".card");
    console.log("show me the node count of current card divs....", removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    };

    
    // Loop over the library array and display to the cards
    let index = 0;
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        // Create remove book button and add class attribute for each array card
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-btn");
        removeBookButton.textContent = "Remove From Library"
        console.log("show me my current array objects inside of foreach...", myLibrary);

        // Link the data attribute of the remove button to the array and card
        removeBookButton.dataset.linkedArray = index;
        index++;
        console.log("show me the dataset link back to the array...", removeBookButton.dataset.linkedArray);
        card.appendChild(removeBookButton);

        // Start event listener/remove array item from array and card from parent div via data link
        removeBookButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary() {
            let bookRemove = removeBookButton.dataset.linkedArray;
            console.log("Attempting to remove array item via data attribute...", parseInt(bookRemove));
            myLibrary.remove(parseInt(bookRemove), 1);
            card.remove();
            displayBooksOnPage();
        }


        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}


// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-btn");
addBookButton.addEventListener("click", displayTheForm);


function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
}

// Start event listener/add input to array to new entry form
const submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", intakeFormData);

// Transform form data to variables for intake
function intakeFormData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value

    // Break out if Form is incomplete or not valid
    if ((title == "") || (author == "") || (pages == "") || (read == "")) {
        return;        
    }

    // Call function to input the book data to array 
    addBookToLibrary(title, author, pages, read);

    // Reset the form after successful submission
    document.getElementById("add-book").reset();
}

// Start event listener for clear form button
const clearButton = document.querySelector(".reset-btn");
clearButton.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("add-book").reset();
}

// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "295 pages", "not read yet");
// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "395 pages", "read");
// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "222 pages", "not read yet");
// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "398 pages", "read");
// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "297 pages", "read");
// addBookToLibrary("The Hobbit", " by J.R.R Tolkein", "2876 pages", "not read yet");

// console.log("End of code array:", myLibrary );
// displayBooksOnPage();
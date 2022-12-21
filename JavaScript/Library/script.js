
let myLibrary = [
  {
		title: 'test1',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test2',
		author: 'test',
		pages: 123,
		read: false
	},
	{
		title: 'test3',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test4',
		author: 'test',
		pages: 123,
		read: false
	},
	{
		title: 'test5',
		author: 'test',
		pages: 123,
		read: true
	}
];

const libraryList = document.getElementById('library-list');
const formDiv = document.getElementById('form-div');
const readBtn = document.createElement('div');
const removeBtn = document.createElement('div');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    if (title !== '' && author !== '' && pages !== '') {
      myLibrary.push(new Book(title, author, pages, read));
      // myLibrary.push(book);
      displayBooks();
      clearForm();
      hideForm();
    } else {
      alert('Form not filled out!')
    }
}

function displayBooks() {
    libraryList.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
      removeBtn.innerHTML = `<button class="remove-btn" onclick="removeBook(${i})">Delete</button>`;
      if (myLibrary[i].read) {
        readBtn.innerHTML = `<button class="read-btn" onclick="toggleRead(${i})">Read</button>`;
      } else {
        readBtn.innerHTML = `<button class="not-read-btn" onclick="toggleRead(${i})">UnRead</button>`;
      }
      const libraryItem = document.createElement('div');
      libraryItem.classList.add('library-row');
      libraryItem.innerHTML = 
        `<div>${myLibrary[i].title}</div>
        <div>${myLibrary[i].author}</div>
        <div>${myLibrary[i].pages}</div>`;
      libraryItem.append(readBtn.cloneNode(true));
		  libraryItem.append(removeBtn.cloneNode(true));
		  libraryList.append(libraryItem);
    }
}

displayBooks();

function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}

function toggleRead(i) {
  if (myLibrary[i].read) {
    myLibrary[i].read = false;
  } else {
    myLibrary[i].read = true;
  }
  displayBooks();
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

function showForm() {
  formDiv.classList.remove('hide');
  formDiv.classList.add('show');
}

function hideForm() {
  formDiv.classList.remove('show');
  formDiv.classList.add('hide');
}

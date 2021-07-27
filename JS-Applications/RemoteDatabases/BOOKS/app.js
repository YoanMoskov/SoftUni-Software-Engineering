const loadAllBooksEl = document.querySelector('#loadBooks');
const booksListEl = document.querySelector('body > table > tbody');
const titleInputEl = document.querySelector('#title');
const authorInputEl = document.querySelector('#author');
const isbnInputEl = document.querySelector('#isbn');
const submitButtonEl = document.querySelector('body > form > button');

const baseUrl = `https://books-a6e07.firebaseio.com/`;

loadAllBooksEl.addEventListener('click', loadAllBooks)
submitButtonEl.addEventListener('click', createBook)

function loadAllBooks() {
    fetch(`${baseUrl}.json`)
        .then(res => res.json())
        .then(data => {
            if (data != null) {
                while (booksListEl.firstChild) {
                    booksListEl.firstChild.remove();
                }
                Object.keys(data).forEach(book => {
                    let urlEditDelete = `${baseUrl}${book}.json`
                    let title = data[book].title;
                    let author = data[book].author;
                    let isbn = data[book].isbn;
                    let trElement = document.createElement('tr');

                    let tdTitleElement = document.createElement('td');
                    let tdAuthorElement = document.createElement('td');
                    let tdIsbnElement = document.createElement('td');
                    let buttonsTdElement = document.createElement('td');
                    let buttonsTagTdElement = document.createElement('td');
                    let buttonEditElement = document.createElement('button');
                    let buttonDeleteElement = document.createElement('button');

                    tdTitleElement.textContent = title;
                    tdAuthorElement.textContent = author;
                    tdIsbnElement.textContent = isbn;
                    buttonEditElement.textContent = 'Edit';
                    buttonEditElement.addEventListener('click', editBook);
                    buttonDeleteElement.textContent = 'Delete';
                    buttonDeleteElement.addEventListener('click', deleteBook);

                    trElement.appendChild(tdTitleElement);
                    trElement.appendChild(tdAuthorElement);
                    trElement.appendChild(tdIsbnElement);

                    buttonsTdElement.appendChild(buttonEditElement);
                    buttonsTdElement.appendChild(buttonDeleteElement);

                    trElement.appendChild(buttonsTdElement);

                    booksListEl.appendChild(trElement);

                    function editBook(e) {
                        let title = e.currentTarget.parentElement.parentElement.firstChild;
                        let author = title.nextSibling;
                        let isbn = author.nextSibling;


                        function titleFunc() {
                            if (titleInputEl.value !== '') {
                                return titleInputEl.value;
                            } else {
                                return title.textContent
                            }
                        }

                        function authorFunc() {
                            if (authorInputEl.value !== '') {
                                return authorInputEl.value;
                            } else {
                                return author.textContent;
                            }
                        }

                        function isbnFunc() {
                            if (isbnInputEl.value !== '') {
                                return isbnInputEl.value;
                            } else {
                                return isbn.textContent;
                            }
                        }

                        let obj = {
                            title: titleFunc(),
                            author: authorFunc(),
                            isbn: isbnFunc(),
                        }

                        fetch(urlEditDelete, {
                            method: 'PUT',
                            body: JSON.stringify(obj),
                        })

                        if (titleInputEl.value !== '') {
                            title.textContent = titleInputEl.value;
                        }
                        if (authorInputEl.value !== '') {
                            author.textContent = authorInputEl.value;
                        }
                        if (isbnInputEl.value !== '') {
                            isbn.textContent = isbnInputEl.value;
                        }

                        titleInputEl.value = '';
                        authorInputEl.value = '';
                        isbnInputEl.value = '';
                    }

                    function deleteBook() {
                        fetch(urlEditDelete, {
                            method: 'DELETE',
                        })
                            .then(trElement.remove())
                            .catch(err => {
                                console.log(err);
                            })

                    }
                });
            }
        }).catch(err => {
        console.log(err)
    })
}
function createBook(e) {
    e.preventDefault();
    if (titleInputEl.value !== '' && authorInputEl.value !== '' && isbnInputEl.value !== '') {
        fetch(`${baseUrl}.json`, {
            method: 'POST',
            body: JSON.stringify({
                title: titleInputEl.value,
                author: authorInputEl.value,
                isbn: isbnInputEl.value,
            }),
        })
    }
    titleInputEl.value = '';
    authorInputEl.value = '';
    isbnInputEl.value = '';
}

loadAllBooks();
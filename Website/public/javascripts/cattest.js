let pageIndex = 0;
const booksPerPage = 9;
let currentSummary = null;

// Set the body id, used for styling
document.body.setAttribute('id', 'catalog__body');

const main = document.querySelector('main');
main.setAttribute('id', 'catalog__main');

const catalogContainer = document.createElement('div');
catalogContainer.setAttribute('class', 'catalog__container');

const logo = document.createElement('img');
logo.src = '/books/GotBooks.png';
logo.setAttribute('class', 'catalog__logo');
catalogContainer.appendChild(logo);

const title = document.createElement('h1');
title.textContent = 'Click on a book to see more information';
title.setAttribute('class', 'catalog__title');
catalogContainer.appendChild(title);

const book__container = document.createElement('div');
book__container.setAttribute('id', 'book__container');
catalogContainer.appendChild(book__container);

// Function to fetch book data from the database
async function fetchBooks() {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();
        return books;
    } catch (error) {
        console.error('Error fetching book data:', error);
        return [];
    }
}

async function displayBooks(){
    books = await fetchBooks();
    book__container.innerHTML = "";
    for (let i = pageIndex; i < Math.min(pageIndex + booksPerPage, books.length); i++) {
        const book = books[i];
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;
        bookDiv.appendChild(img);

        const title = document.createElement('p');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const summary = document.createElement('p');
        summary.textContent = book.content;
        summary.classList.add('summary');
        bookDiv.appendChild(summary);

        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';
        reserveButton.addEventListener('click', () => {
            if (confirm(`Reserve this book: ${book.title}`)) {
                // check if user is logged in PLACED HERE
                window.location.href = '../public/login.html?book=' + encodeURIComponent(book.title);
            }
            else {
                console.log('Operation cancelled');
            }
        });
        bookDiv.appendChild(reserveButton);

        img.addEventListener('click', () => {
            if (currentSummary && currentSummary !== summary) {
                currentSummary.style.display = 'none';
            }
            summary.style.display = summary.style.display === 'block' ? 'none' : 'block';
            currentSummary = summary.style.display === 'block' ? summary : null;
            console.log(summary);
        });

        book__container.appendChild(bookDiv);
    }
}

// Navigation bar for the catalog
const navbarButtons = document.createElement('div');
navbarButtons.setAttribute('class', 'navbar__buttons');

const prevButton = document.createElement('button');
prevButton.textContent = '←';
prevButton.addEventListener('click', lastPageDisplay);
prevButton.addEventListener("click", () => {
    if (pageIndex - booksPerPage >= 0) {
        pageIndex -= booksPerPage;
        displayBooks();
    }
});

const nextButton = document.createElement('button');
nextButton.textContent = '→';
nextButton.addEventListener('click', nextPageDisplay);
nextButton.addEventListener("click", () => {
    if (pageIndex + booksPerPage < books.length) {
        pageIndex += booksPerPage;
        displayBooks();
    }
});

let page = 1;

const pageDisplay = document.createElement('p');
pageDisplay.id = 'page-display';
pageDisplay.textContent = `Page ${page}`;

function lastPageDisplay() {
    if (page > 1) {
    page--;
    pageDisplay.textContent = `Page ${page}`;
    }

}
function nextPageDisplay() {
    if (page < 6) {
        page++;
        pageDisplay.textContent = `Page ${page}`;
    }
}

navbarButtons.appendChild(prevButton);
navbarButtons.appendChild(pageDisplay);
navbarButtons.appendChild(nextButton);
catalogContainer.appendChild(navbarButtons);
main.appendChild(catalogContainer);


// Call the loadCatalog function on load
window.addEventListener('load', displayBooks);

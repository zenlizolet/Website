const books = [
    { title: "The City of Brass(The Daevabad Trilogy, #1)", imageUrl: "/books/book1.jpg", summary: "Nahri has never believed in magic. Certainly, she has power; on the streets of 18th century Cairo, she’s a con woman of unsurpassed talent. But she knows better than anyone that the trade she uses to get by—palm readings, zars, healings—are all tricks, sleights of hand, learned skills; a means to the delightful end of swindling Ottoman nobles.\n" +
            "\n" +
            "But when Nahri accidentally summons an equally sly, darkly mysterious djinn warrior to her side during one of her cons, shes forced to accept that the magical world she thought only existed in childhood stories is real. For the warrior tells her a new tale: across hot, windswept sands teeming with creatures of fire, and rivers where the mythical marid sleep; past ruins of once-magnificent human metropolises, and mountains where the circling hawks are not what they seem, lies Daevabad, the legendary city of brass, a city to which Nahri is irrevocably bound.\n" +
            "\n" +
            "In that city, behind gilded brass walls laced with enchantments, behind the six gates of the six djinn tribes, old resentments are simmering. And when Nahri decides to enter this world, she learns that true power is fierce and brutal. That magic cannot shield her from the dangerous web of court politics. That even the cleverest of schemes can have deadly consequences.\n" +
            "\n" +
            "After all, there is a reason they say be careful what you wish for..." },
    { title: "Book 2", imageUrl: "/books/book2.jpg", summary: "Summary of Book 2" },
    { title: "Book 3", imageUrl: "/books/book3.jpg", summary: "Summary of Book 3" },
    { title: "Book 4", imageUrl: "/books/book4.jpg", summary: "Summary of Book 4" },
    { title: "Book 5", imageUrl: "/books/book5.jpg", summary: "Summary of Book 5" },
    { title: "Book 6", imageUrl: "/books/book6.jpg", summary: "Summary of Book 6" },
    { title: "Book 7", imageUrl: "/books/book7.jpg", summary: "Summary of Book 7" },
    { title: "Book 8", imageUrl: "/books/book8.jpg", summary: "Summary of Book 8" },
    { title: "Book 9", imageUrl: "/books/book9.jpg", summary: "Summary of Book 9" },
    { title: "Book 10", imageUrl: "/books/book10.jpg", summary: "Summary of Book 10" },
    { title: "Book 11", imageUrl: "/books/book11.jpg", summary: "Summary of Book 11" },
    { title: "Book 12", imageUrl: "/books/book12.jpg", summary: "Summary of Book 12" },
    { title: "Book 13", imageUrl: "/books/book13.jpg", summary: "Summary of Book 13" },
    { title: "Book 14", imageUrl: "/books/book14.jpg", summary: "Summary of Book 14" },
    { title: "Book 15", imageUrl: "/books/book15.jpg", summary: "Summary of Book 15" },
    { title: "Book 16", imageUrl: "/books/book16.jpg", summary: "Summary of Book 16" },
    { title: "Book 17", imageUrl: "/books/book17.jpg", summary: "Summary of Book 17" },
    { title: "Book 18", imageUrl: "/books/book18.jpg", summary: "Summary of Book 18" },
    { title: "Book 19", imageUrl: "/books/book19.jpg", summary: "Summary of Book 19" },
    { title: "Book 20", imageUrl: "/books/book20.jpg", summary: "Summary of Book 20" },
    { title: "Book 21", imageUrl: "/books/book21.jpg", summary: "Summary of Book 21" },
    { title: "Book 22", imageUrl: "/books/book22.jpg", summary: "Summary of Book 22" },
    { title: "Book 23", imageUrl: "/books/book23.jpg", summary: "Summary of Book 23" },
    { title: "Book 24", imageUrl: "/books/book24.jpg", summary: "Summary of Book 24" },
    { title: "Book 25", imageUrl: "/books/book25.jpg", summary: "Summary of Book 25" },
    { title: "Book 26", imageUrl: "/books/book26.jpg", summary: "Summary of Book 26" },
    { title: "Book 27", imageUrl: "/books/book27.jpg", summary: "Summary of Book 27" },
    { title: "Book 28", imageUrl: "/books/book28.jpg", summary: "Summary of Book 28" },
    { title: "Book 29", imageUrl: "/books/book29.jpg", summary: "Summary of Book 29" },
    { title: "Book 30", imageUrl: "/books/book30.jpg", summary: "Summary of Book 30" },
    { title: "Book 31", imageUrl: "/books/book31.jpg", summary: "Summary of Book 31" },
    { title: "Book 32", imageUrl: "/books/book32.jpg", summary: "Summary of Book 32" },
    { title: "Book 33", imageUrl: "/books/book33.jpg", summary: "Summary of Book 33" },
    { title: "Book 34", imageUrl: "/books/book34.jpg", summary: "Summary of Book 34" },
    { title: "Book 35", imageUrl: "/books/book35.jpg", summary: "Summary of Book 35" },
    { title: "Book 36", imageUrl: "/books/book36.jpg", summary: "Summary of Book 36" },
    { title: "Book 37", imageUrl: "/books/book37.jpg", summary: "Summary of Book 37" },
    { title: "Book 38", imageUrl: "/books/book38.jpg", summary: "Summary of Book 38" },
    { title: "Book 39", imageUrl: "/books/book39.jpg", summary: "Summary of Book 39" },
    { title: "Book 40", imageUrl: "/books/book40.jpg", summary: "Summary of Book 40" },
    { title: "Book 41", imageUrl: "/books/book41.jpg", summary: "Summary of Book 41" },
    { title: "Book 42", imageUrl: "/books/book42.jpg", summary: "Summary of Book 42" },
    { title: "Book 43", imageUrl: "/books/book43.jpg", summary: "Summary of Book 43" },
    { title: "Book 44", imageUrl: "/books/book44.jpg", summary: "Summary of Book 44" },
    { title: "Book 45", imageUrl: "/books/book45.jpg", summary: "Summary of Book 45" },
    { title: "Book 46", imageUrl: "/books/book46.jpg", summary: "Summary of Book 46" },
    { title: "Book 47", imageUrl: "/books/book47.jpg", summary: "Summary of Book 47" },
    { title: "Book 48", imageUrl: "/books/book48.jpg", summary: "Summary of Book 48" },
    { title: "Book 49", imageUrl: "/books/book49.jpg", summary: "Summary of Book 49" },
    { title: "Book 50", imageUrl: "/books/book50.jpg", summary: "Summary of Book 50" }
];

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

function displayBooks(){
    book__container.innerHTML = "";
    for (let i = pageIndex; i < Math.min(pageIndex + booksPerPage, books.length); i++) {
        const book = books[i];
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const img = document.createElement('img');
        img.src = book.imageUrl;
        img.alt = book.title;
        bookDiv.appendChild(img);

        const title = document.createElement('p');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const summary = document.createElement('p');
        summary.textContent = book.summary;
        summary.classList.add('summary');
        bookDiv.appendChild(summary);

        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';
        reserveButton.addEventListener('click', () => {
                window.location.href = '../public/login.html';
                alert(`Log in to reserve this book: ${book.title}`);
                // alert(`Reservation for ${book.title}`);
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

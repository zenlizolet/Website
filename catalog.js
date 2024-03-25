// Set the body id, used for styling
document.body.setAttribute('id', 'catalog__body');

async function loadCatalog() {
    const main = document.querySelector('main');
    main.setAttribute('id', 'catalog__main');

    const catalogContainer = document.createElement('div');
    catalogContainer.setAttribute('class', 'catalog__container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Book Catalog';
    h1.setAttribute('class', 'catalog__title');
    catalogContainer.appendChild(h1);

    const bookList = document.createElement('ul');
    bookList.setAttribute('class', 'catalog__list');

    try {
        // Fetch book data from the database
        const response = await fetch('/api/books');
        const books = await response.json();

        books.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author}`;
            listItem.setAttribute('class', 'catalog__item');
            bookList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching book data:', error);
    }

    catalogContainer.appendChild(bookList);
    main.appendChild(catalogContainer);
}

// Call the loadCatalog function on load
window.addEventListener('load', loadCatalog);

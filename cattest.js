// Set the body id, used for styling
document.body.setAttribute('id', 'catalog__body');

async function loadCatalog() {
    const booksPerPage = 9;
    const main = document.querySelector('main');
    main.setAttribute('id', 'catalog__main');

    const catalogContainer = document.createElement('div');
    catalogContainer.setAttribute('class', 'catalog__container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Book Catalog';
    h1.setAttribute('class', 'catalog__title');
    catalogContainer.appendChild(h1);




// Navigation bar for the catalog
    const navbarButtons = document.createElement('div');
    navbarButtons.setAttribute('class', 'navbar__buttons');
    const prevButton = document.createElement('button');
    prevButton.textContent = '←';
    prevButton.addEventListener('click', lastPageDisplay);
    const nextButton = document.createElement('button');
    nextButton.textContent = '→';
    nextButton.addEventListener('click', nextPageDisplay);

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
}

// Call the loadCatalog function on load
window.addEventListener('load', loadCatalog);

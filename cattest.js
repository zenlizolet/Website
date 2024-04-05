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

    const navbarButtons = document.createElement('div');
    navbarButtons.setAttribute('class', 'navbar__buttons');
    const prevButton = document.createElement('button');
    prevButton.textContent = '←';
    const nextButton = document.createElement('button');
    nextButton.textContent = '→';
    const pageDisplay = document.createElement('p');
    pageDisplay.textContent = 'Page';
    navbarButtons.appendChild(pageDisplay);

    navbarButtons.appendChild(prevButton);
    navbarButtons.appendChild(nextButton);
    catalogContainer.appendChild(navbarButtons);
    catalogContainer.appendChild(pageDisplay);
    
    // const bookList = document.createElement('ul');
    // bookList.setAttribute('class', 'catalog__list');
    //
    // try {
    //     // Fetch book data from the database
    //     const response = await fetch('/api/books');
    //     const books = await response.json();
    //
    //     const table = document.createElement('table');
    //     table.setAttribute('class', 'catalog__table');
    //
    //     const tableHeader = document.createElement('tr');
    //     const titleHeader = document.createElement('th');
    //     titleHeader.textContent = 'Title';
    //     const authorHeader = document.createElement('th');
    //     authorHeader.textContent = 'Author';
    //     const contentHeader = document.createElement('th');
    //     contentHeader.textContent = 'Content';
    //     tableHeader.appendChild(titleHeader);
    //     tableHeader.appendChild(authorHeader);
    //     tableHeader.appendChild(contentHeader);
    //     table.appendChild(tableHeader);
    //
    //     books.forEach(book => {
    //         const tableRow = document.createElement('tr');
    //         const titleCell = document.createElement('td');
    //         titleCell.textContent = book.title;
    //         const authorCell = document.createElement('td');
    //         authorCell.textContent = book.author;
    //         const contentCell = document.createElement('td');
    //         contentCell.textContent = book.content;
    //         tableRow.appendChild(titleCell);
    //         tableRow.appendChild(authorCell);
    //         tableRow.appendChild(contentCell);
    //         table.appendChild(tableRow);
    //     });
    //
    //     catalogContainer.appendChild(table);
    // } catch (error) {
    //     console.error('Error fetching book data:', error);
    // }

    // catalogContainer.appendChild(bookList);
    main.appendChild(catalogContainer);
}

// Call the loadCatalog function on load
window.addEventListener('load', loadCatalog);

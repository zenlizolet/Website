class Person {
    #name;
    #yearOfBirth;
  
    constructor(name, yearOfBirth) {
      this.#name = name;
      this.#yearOfBirth = yearOfBirth;
    }
  
    get name() {
      return this.#name;
    }
  
    get yearOfBirth() {
      return this.#yearOfBirth;
    }
  }
  
  class Author extends Person {
    #titles;
    #wikipediaLink;
  
    constructor(name, yearOfBirth, titles, wikipediaLink) {
      super(name, yearOfBirth);
      this.#titles = titles;
      this.#wikipediaLink = wikipediaLink;
    }
  
    get titles() {
      return this.#titles;
    }
  
    get wikipediaLink() {
      return this.#wikipediaLink;
    }
  }
  
  class Company {
    #name;
    #wikipediaLink;
  
    constructor(name, wikipediaLink) {
      this.#name = name;
      this.#wikipediaLink = wikipediaLink;
    }
  
    get name() {
      return this.#name;
    }
  
    get wikipediaLink() {
      return this.#wikipediaLink;
    }
  }
  
  class Publisher extends Company {
    #titles;
  
    constructor(name, wikipediaLink, titles) {
      super(name, wikipediaLink);
      this.#titles = titles;
    }
  
    get titles() {
      return this.#titles;
    }
  }
  
  class CreativeWork {
    #authors;
    #year;
    #title;
  
    constructor(authors, year, title) {
      this.#authors = authors;
      this.#year = year;
      this.#title = title;
    }
  
    get authors() {
      return this.#authors;
    }
  
    get year() {
      return this.#year;
    }
  
    get title() {
      return this.#title;
    }
  }
  
  class Book extends CreativeWork {
    #genre;
    #publisher;
    #cover;
    #plot;
  
    constructor(authors, year, title, genre, publisher, cover, plot) {
      super(authors, year, title);
      this.#genre = genre;
      this.#publisher = publisher;
      this.#cover = cover;
      this.#plot = plot;
    }
  
    get genre() {
      return this.#genre;
    }
  
    get publisher() {
      return this.#publisher;
    }
  
    get cover() {
      return this.#cover;
    }
  
    get plot() {
      return this.#plot;
    }
  }

function createInfoPage(){
    let author = new Author("George R. R. Martin", 1948, ["A Game of Thones"], "https://en.wikipedia.org/wiki/George_R._R._Martin");
    let publisher = new Publisher("Luitingh-Sijthoff", "https://nl.wikipedia.org/wiki/Luitingh-Sijthoff", ["A Game of Thones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"]);

    let book = new Book([author], 1996, "A Game of Thrones", "Fantasy", publisher, "https://upload.wikimedia.org/wikipedia/en/d/d8/A_Game_of_Thrones.jpg", "The book is set in the fictional Seven Kingdoms of Westeros and the continent of Essos, and follows the noble families fighting for the Iron Throne and control of Westeros.");


    // Create elements for the book's information
    let titleElement = document.createElement('h1');
    titleElement.textContent = book.title;
    
    let genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${book.genre}`;
    
    let yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${book.year}`;
    
    let authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${author.name}`;
    
    let publisherElement = document.createElement('p');
    publisherElement.textContent = `Publisher: ${publisher.name}`;
    
    let coverElement = document.createElement('img');
    coverElement.src = book.cover;
    
    let plotElement = document.createElement('p');
    plotElement.textContent = `Plot: ${book.plot}`;
    
      // Append these elements to the main element
      let mainElement = document.querySelector('main');
      mainElement.appendChild(titleElement);
      mainElement.appendChild(genreElement);
      mainElement.appendChild(yearElement);
      mainElement.appendChild(authorElement);
      mainElement.appendChild(publisherElement);
      mainElement.appendChild(coverElement);
      mainElement.appendChild(plotElement);
    
    };


    window.onload = function() {
        console.log("The info-page has loaded!");
        createInfoPage();
    }
    
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
let author = new Author("George R. R. Martin", 1948, ["A Game of Thones"], "https://en.wikipedia.org/wiki/George_R._R._Martin");
let publisher = new Publisher("Luitingh-Sijthoff", "https://nl.wikipedia.org/wiki/Luitingh-Sijthoff", ["A Game of Thones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"]);

let book = new Book([author], 1996, "A Game of Thrones", "Fantasy", publisher, "https://upload.wikimedia.org/wikipedia/en/d/d8/A_Game_of_Thrones.jpg", "The book is set in the fictional Seven Kingdoms of Westeros and the continent of Essos, and follows the noble families fighting for the Iron Throne and control of Westeros.");



// This function will run when the page loads
window.onload = function() {
    console.log("The page has loaded!");
    url = window.location.href;
    createNav();
    createFooter();
    
    if (url.endsWith('info.html')) {
      createInfoPage();
    }
}



function createNav(){
  var nav = document.createElement('nav');
  var ul = document.createElement('ul');
  var pages = ['Homepage', 'Author', 'Reviews', 'Setting', 'Houses', 'Sequels', 'Dynamic Page'];
  var links = ['index.html', 'author.html', 'reviews.html', 'setting.html', 'houses.html', 'sequels.html', 'info.html'];

  for (var i = 0; i < pages.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.textContent = pages[i];
      a.href = links[i];
      li.appendChild(a);
      ul.appendChild(li);
  }
  
  nav.appendChild(ul);
  var header = document.querySelector('header');
  header.appendChild(nav); 

};

function createFooter(){
  var footer = document.createElement('footer');
  var p = document.createElement('p');
  var select = documet.createElement('select');
  p.textContent = String.fromCharCode(169) + ' 2024 ASOIAF, Alexander Le, Jieni Ding, Liselot Ankone. All rights reserved.';
  footer.appendChild(p);
  footer.appendChild(select);
  var body = document.querySelector('body');
  body.appendChild(footer);
};

function changeStyleOfElement() {
  const fontValue = document.getElementById("font-select").value;
  const colorValue = document.getElementById("color-select").value;
  const elementOptions = document.getElementById("element-select").value;
  const selectedStyle = document.getElementById("style-select").value;
  const selectedElements = document.querySelectorAll(elementOptions);
  if(selectedStyle==="color")
  {    
      for (let i = 0; i < selectedElements.length; ++i) 
      {selectedElements[i].style.color = colorValue;}
  }
  else
  {        
      for (let i = 0; i < selectedElements.length; ++i) 
      {selectedElements[i].style.fontSize = fontValue;}
  }
}

//This function changes the currently visible property to change
function changeStyleChoice(){
  if(document.getElementById("style-select").value =="color")
  {
      document.getElementById("font-select").hidden = true;
      document.getElementById("color-select").hidden = false;
  }
  else
  {
      document.getElementById("font-select").hidden = false;
      document.getElementById("color-select").hidden = true;
  }
}

var fontButton = document.getElementById('select-font-button');
fontButton.addEventListener('click', changeFont, false);

var styleSelector = document.getElementById('style-select');
styleSelector.addEventListener('change', changeStyleChoice, false);   
function createInfoPage(){
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
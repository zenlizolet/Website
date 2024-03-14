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

const backgroundCSS = css => {
  let bgCSS = document.createElement('style');
  bgCSS.innerHTML = css;
  document.head.appendChild(bgCSS);
  return bgCSS;
}
backgroundCSS('body {background-image: url("/images/GOT.png");  background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: 0 35%}');

function createInfoPage(){
  let author = new Author("George R. R. Martin", 1948, ["A Game of Thrones"], "https://en.wikipedia.org/wiki/George_R._R._Martin");
  let publisher = new Publisher("Luitingh-Sijthoff", "https://nl.wikipedia.org/wiki/Luitingh-Sijthoff", ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"]);
  let book = new Book([author], 1996, "A Game of Thrones", "Fantasy", publisher, "/pictures/authorpage/book1.jpg",
      "The Winds of Winterfell\n" +
      "In the shadow of the ancient castle of Winterfell, the Stark family stands resolute. Eddard “Ned” Stark, the stoic lord, receives a summons that will alter the course of his life. His old friend, King Robert Baratheon, beckons him to the capital, King’s Landing, to serve as Hand of the King. Ned’s honor compels him to accept, though he senses treachery lurking in the shadows.\n" +
      "\n" +
      "Lannisters and Lions\n" +
      "Across the realm, the Lannister lions prowl. Queen Cersei, with her golden hair and silver tongue, conceals secrets like daggers beneath her velvet gowns. Her twin brother, Jaime, the Kingslayer, shares both her blood and her forbidden desires. When young Bran Stark stumbles upon their clandestine tryst, the world tilts on its axis. Jaime’s desperate act—pushing Bran from a tower window—ripples through time, leaving scars on hearts and kingdoms.\n" +
      "\n" +
      "The Exiled Princess\n" +
      "Beyond the Narrow Sea, Daenerys Targaryen, the last scion of the deposed Targaryen dynasty, marries Khal Drogo, a fierce warrior of the nomadic Dothraki. Their union is a fragile alliance, sealed with dragon eggs—the remnants of a lost age. Daenerys, once a pawn, begins to awaken. Her journey from meek bride to Mother of Dragons will echo across continents, igniting flames that threaten to consume all.\n" +
      "\n" +
      "The Iron Throne Beckons\n" +
      "As winter looms, the Iron Throne remains the ultimate prize. Noble houses clash, alliances fray, and whispers of ancient magic resurface. Ned Stark navigates treacherous court politics, unaware that his honor may cost him dearly. Meanwhile, Jon Snow, Ned’s bastard son, forsakes his birthright to join the Night’s Watch—a brotherhood sworn to guard the Wall against the terrors beyond.\n" +
      "\n" +
      "Intrigue, Betrayal, and Destiny\n" +
      "In this game of thrones, no one is safe. Schemes intertwine like ivy on castle walls. The direwolves howl, and the raven’s wings bear secrets. Amidst the clash of swords and the rustle of silken gowns, destinies converge. Winter is coming, and with it, a storm that will reshape the Seven Kingdoms forever.\n" +
      "\n" +
      "And so, dear reader, whether you stand in the icy winds of the North or bask in the warmth of King’s Landing, remember that every choice echoes through time, and the game of thrones plays on, heedless of mortal hearts");
  
    // Create elements for the book's information
    let titleElement = document.createElement('h1');
    titleElement.textContent = book.title;
    
    let genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${book.genre}`;
    
    let yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${book.year}`;
    
    let authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${author.name}`;
    authorElement.setAttribute('title', author.wikipediaLink);
    
    let publisherElement = document.createElement('p');
    publisherElement.textContent = `Publisher: ${publisher.name}`;
    publisherElement.setAttribute('title', publisher.wikipediaLink);
    
    let coverElement = document.createElement('img');
    coverElement.src = book.cover;
    
    let plotElement = document.createElement('p');
    plotElement.textContent = `Plot: ${book.plot}`;

    let BackgroundImage = document.createElement('background-image')

    
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
    
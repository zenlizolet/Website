let count = 1;
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
  let author = new Author("George R. R. Martin", 1948, ["A Game of Thrones"], "https://en.wikipedia.org/wiki/George_R._R._Martin");
  let publisher = new Publisher("Luitingh-Sijthoff", "https://nl.wikipedia.org/wiki/Luitingh-Sijthoff", ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"]);
  let book = new Book([author], 1996, "A Game of Thrones", "Fantasy", publisher, "/pictures/authorpage/book1.jpg", undefined);
  let TWoW = new Book(undefined, undefined, "The Winds of Winterfell", undefined, undefined, undefined, "In the shadow of the ancient castle of Winterfell, the Stark family stands resolute. Eddard “Ned” Stark, the stoic lord, receives a summons that will alter the course of his life. His old friend, King Robert Baratheon, beckons him to the capital, King’s Landing, to serve as Hand of the King. Ned’s honor compels him to accept, though he senses treachery lurking in the shadows.");
  let LaL = new Book(undefined, undefined, "Lannisters and Lions", undefined, undefined, undefined, "Across the realm, the Lannister lions prowl. Queen Cersei, with her golden hair and silver tongue, conceals secrets like daggers beneath her velvet gowns. Her twin brother, Jaime, the Kingslayer, shares both her blood and her forbidden desires. When young Bran Stark stumbles upon their clandestine tryst, the world tilts on its axis. Jaime’s desperate act—pushing Bran from a tower window—ripples through time, leaving scars on hearts and kingdoms.");
  let TEP = new Book(undefined, undefined, "The Exiled Princess", undefined, undefined, undefined, "Beyond the Narrow Sea, Daenerys Targaryen, the last scion of the deposed Targaryen dynasty, marries Khal Drogo, a fierce warrior of the nomadic Dothraki. Their union is a fragile alliance, sealed with dragon eggs—the remnants of a lost age. Daenerys, once a pawn, begins to awaken. Her journey from meek bride to Mother of Dragons will echo across continents, igniting flames that threaten to consume all.");
  let TITB = new Book(undefined, undefined, "The Iron Throne Beckons", undefined, undefined, undefined, "As winter looms, the Iron Throne remains the ultimate prize. Noble houses clash, alliances fray, and whispers of ancient magic resurface. Ned Stark navigates treacherous court politics, unaware that his honor may cost him dearly. Meanwhile, Jon Snow, Ned’s bastard son, forsakes his birthright to join the Night’s Watch—a brotherhood sworn to guard the Wall against the terrors beyond.");
  let IBaD = new Book(undefined, undefined, "Intrigue, Betrayal, and Destiny", undefined, undefined, undefined, "In this game of thrones, no one is safe. Schemes intertwine like ivy on castle walls. The direwolves howl, and the raven’s wings bear secrets. Amidst the clash of swords and the rustle of silken gowns, destinies converge. Winter is coming, and with it, a storm that will reshape the Seven Kingdoms forever. And so, dear reader, whether you stand in the icy winds of the North or bask in the warmth of King’s Landing, remember that every choice echoes through time, and the game of thrones plays on, heedless of mortal hearts");

  // Making the paragraph headers and their paragraphs.
  let titleTWoW = document.createElement('h2');
  titleTWoW.textContent = TWoW.title;
  let plotTWoW = document.createElement('p');
  plotTWoW.textContent = TWoW.plot;

  let titleLAL = document.createElement('h2');
  titleLAL.textContent = LaL.title;
  let plotLAL = document.createElement('p');
  plotLAL.textContent = LaL.plot;

  let titleTEP = document.createElement('h2');
  titleTEP.textContent = TEP.title;
  let plotTEP = document.createElement('p');
  plotTEP.textContent = TEP.plot;

  let titleTITB = document.createElement('h2');
  titleTITB.textContent = TITB.title;
  let plotTITB = document.createElement('p');
  plotTITB.textContent = TITB.plot;

  let titleIBaD = document.createElement('h2');
  titleIBaD.textContent = IBaD.title;
  let plotIBaD = document.createElement('p');
  plotIBaD.textContent = IBaD.plot;

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
  coverElement.alt = "Book Cover";
  coverElement.setAttribute('id', "info__cover");
  
  let plotElement = document.createElement('h1');
  plotElement.textContent = `Plot`;
  
  // Append these elements to the main element
  let mainElement = document.querySelector('main');
  
  //set the body id, used for styling
  document.body.setAttribute('id', "info__body");
 
  // Create a container for the book's information
  let textContainer = document.createElement('div');
  textContainer.setAttribute('id', "info__text__container");

  // Add the book's information to the text container
  textContainer.appendChild(titleElement);
  textContainer.appendChild(genreElement);
  textContainer.appendChild(yearElement);
  textContainer.appendChild(authorElement);
  textContainer.appendChild(publisherElement);

  // Create a container for the book's cover
  let coverContainer = document.createElement('div');
  coverContainer.setAttribute('id', "info__cover__container");

  // Add the book's cover to the cover container
  coverContainer.appendChild(coverElement);

  // Create a parent container for the text and cover containers
  let infoContainer = document.createElement('section');
  infoContainer.setAttribute('id', "info__container");
  infoContainer.style.display = 'flex';

  // Add the text and cover containers to the parent container
  infoContainer.appendChild(textContainer);
  infoContainer.appendChild(coverContainer);
  mainElement.appendChild(infoContainer);

  //create a dashed line
  let dashedLine = document.createElement('hr');
  dashedLine.setAttribute('class', "dashed");

  // Create a new button element
  let killButton = document.createElement('button');
  killButton.id = 'calc';
  killButton.textContent = 'Poison King Joffrey';
  killButton.addEventListener('click', calculate);

  let killCounter = document.createElement('p');
  killCounter.id = 'counter';

  let deathGif = document.createElement('img');
  function calculate() {
    let counter = document.getElementById('counter');
    counter.textContent = `King Joffrey has been killed ${count} times`;
    count++;

    deathGif.src = 'https://media.giphy.com/media/xT1XGMGzPmRZIEA3q8/giphy.gif';
  }

  mainElement.appendChild(dashedLine);

  mainElement.appendChild(plotElement);

  mainElement.appendChild(titleTWoW);
  mainElement.appendChild(plotTWoW);
  mainElement.appendChild(titleLAL);
  mainElement.appendChild(plotLAL)
  mainElement.appendChild(titleTEP);
  mainElement.appendChild(plotTEP);
  mainElement.appendChild(titleTITB);
  mainElement.appendChild(plotTITB);
  mainElement.appendChild(titleIBaD);
  mainElement.appendChild(plotIBaD);
  mainElement.appendChild(killButton);
  mainElement.appendChild(killCounter);
  mainElement.appendChild(deathGif);
}

window.onload = function() {
  console.log("The info-page has loaded!");
  createInfoPage();
}
    

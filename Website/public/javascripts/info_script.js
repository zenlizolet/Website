// This file, info_script.js, is responsible for creating an information page for a book.
// It fetches and displays detailed information about a book, including the title, genre, year of publication, author, publisher, and cover image.
// It also provides a detailed plot summary with different plot points.
// Additionally, it includes an interactive feature where users can "kill" a character (King Joffrey) from the book, and it keeps track of how many times the character has been "killed".
// The information page is created when the window loads.

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

    set name(newName) {
      this.#name = newName;
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

    set titles(newTitles) {
      this.#titles = newTitles;
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

  class PlotPoint {
    #title;
    #description;
  
    constructor(title, description) {
      this.#title = title;
      this.#description = description;
    }
  
    get title() {
      return this.#title;
    }
  
    get description() {
      return this.#description;
    }
  }
  

/**
 * Creates an info page with book information and plot summary.
 */
function createInfoPage(){
  let author = new Author("George R. R. Martin", 1948, ["A Game of Thrones"], "https://en.wikipedia.org/wiki/George_R._R._Martin");
  let publisher = new Publisher("Luitingh-Sijthoff", "https://nl.wikipedia.org/wiki/Luitingh-Sijthoff", ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "The Winds of Winter", "A Dream of Spring"]);
  let book = new Book([author], 1996, "A Game of Thrones", "Fantasy", publisher, "images/pictures/authorpage/book1.jpg", "this is the plot of the book");
  let TWoW = new PlotPoint("The Winds of Winterfell","In the shadow of the ancient castle of Winterfell, the Stark family stands resolute. Eddard “Ned” Stark, the stoic lord, receives a summons that will alter the course of his life. His old friend, King Robert Baratheon, beckons him to the capital, King’s Landing, to serve as Hand of the King. Ned’s honor compels him to accept, though he senses treachery lurking in the shadows.");
  let LaL = new PlotPoint("Lannisters and Lions", "Across the realm, the Lannister lions prowl. Queen Cersei, with her golden hair and silver tongue, conceals secrets like daggers beneath her velvet gowns. Her twin brother, Jaime, the Kingslayer, shares both her blood and her forbidden desires. When young Bran Stark stumbles upon their clandestine tryst, the world tilts on its axis. Jaime’s desperate act—pushing Bran from a tower window—ripples through time, leaving scars on hearts and kingdoms.");
  let TEP = new PlotPoint("The Exiled Princess", "Beyond the Narrow Sea, Daenerys Targaryen, the last scion of the deposed Targaryen dynasty, marries Khal Drogo, a fierce warrior of the nomadic Dothraki. Their union is a fragile alliance, sealed with dragon eggs—the remnants of a lost age. Daenerys, once a pawn, begins to awaken. Her journey from meek bride to Mother of Dragons will echo across continents, igniting flames that threaten to consume all.");
  let TITB = new PlotPoint("The Iron Throne Beckons", "As winter looms, the Iron Throne remains the ultimate prize. Noble houses clash, alliances fray, and whispers of ancient magic resurface. Ned Stark navigates treacherous court politics, unaware that his honor may cost him dearly. Meanwhile, Jon Snow, Ned’s bastard son, forsakes his birthright to join the Night’s Watch—a brotherhood sworn to guard the Wall against the terrors beyond.");
  let IBaD = new PlotPoint("Intrigue, Betrayal, and Destiny", "In this game of thrones, no one is safe. Schemes intertwine like ivy on castle walls. The direwolves howl, and the raven’s wings bear secrets. Amidst the clash of swords and the rustle of silken gowns, destinies converge. Winter is coming, and with it, a storm that will reshape the Seven Kingdoms forever. And so, dear reader, whether you stand in the icy winds of the North or bask in the warmth of King’s Landing, remember that every choice echoes through time, and the game of thrones plays on, heedless of mortal hearts");

  // Making the paragraph headers and their paragraphs.
  let titleTWoW = document.createElement('h2');
  titleTWoW.textContent = TWoW.title;
  let descTWoW = document.createElement('p');
  descTWoW.textContent = TWoW.description;

  let titleLAL = document.createElement('h2');
  titleLAL.textContent = LaL.title;
  let descLAL = document.createElement('p');
  descLAL.textContent = LaL.description;

  let titleTEP = document.createElement('h2');
  titleTEP.textContent = TEP.title;
  let descTEP = document.createElement('p');
  descTEP.textContent = TEP.description;

  let titleTITB = document.createElement('h2');
  titleTITB.textContent = TITB.title;
  let descTITB = document.createElement('p');
  descTITB.textContent = TITB.description;

  let titleIBaD = document.createElement('h2');
  titleIBaD.textContent = IBaD.title;
  let descIBaD = document.createElement('p');
  descIBaD.textContent = IBaD.description;

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
  coverElement.setAttribute('title', 'this is a tooltip with extra information about this book cover :)')
  coverElement.setAttribute('id', "info__cover");
  
  let plotElement = document.createElement('h1');
  plotElement.textContent = `Plot`;
  
  // Create a section for the plotpoints
  let plotSection = document.createElement('section');
  plotSection.setAttribute('id', "plot__container");
  plotSection.appendChild(plotElement);
  plotSection.appendChild(titleTWoW);
  plotSection.appendChild(descTWoW);
  plotSection.appendChild(titleLAL);
  plotSection.appendChild(descLAL)
  plotSection.appendChild(titleTEP);
  plotSection.appendChild(descTEP);
  plotSection.appendChild(titleTITB);
  plotSection.appendChild(descTITB);
  plotSection.appendChild(titleIBaD);
  plotSection.appendChild(descIBaD);
  
  
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
  killButton.title = 'Click to kill King Joffrey'
  killButton.textContent = 'Poison King Joffrey';
  killButton.addEventListener('click', calculate);

  //create a counter for the amount of times King Joffrey has been killed
  let killCounter = document.createElement('p');
  killCounter.id = 'counter';

  let deathGif = document.createElement('img');
  function calculate() {
    let counter = document.getElementById('counter');
    counter.textContent = `King Joffrey has been killed ${count} times`;
    count++;

    let deathContainer = document.createElement('div');
    deathContainer.setAttribute('id', "deathGif__container");

    deathContainer.appendChild(deathGif);
    mainElement.appendChild(deathContainer);

    deathGif.src = 'https://media.giphy.com/media/xT1XGMGzPmRZIEA3q8/giphy.gif';
    deathGif.alt = 'King Joffrey getting poisoned.';
    deathGif.title = "Poisoned by gangster grandma.";
    deathGif.setAttribute('id', "deathGif");
  }
  //put joffrey in his section
  let joffreySection = document.createElement('section');
  joffreySection.setAttribute('id', "joffrey__container");
  joffreySection.appendChild(killButton);
  joffreySection.appendChild(killCounter);
  joffreySection.appendChild(deathGif);



  //finally add all the elements to the main element
  mainElement.appendChild(dashedLine);
  mainElement.appendChild(plotSection);
  mainElement.appendChild(joffreySection);
}

window.onload = function() {
  console.log("The info-page has loaded!");
  createInfoPage();
}
    

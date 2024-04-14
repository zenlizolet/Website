# Group ID 56
Alexander Le, Jieni Ding, Liselot Ankone.
## http://webtech.science.uu.nl/group56


# General description
Library catalog GOTBooks, offering the best fantasy books.

Using dependencies: express, ajax, cookie-parser, debug, ejs, express-session, http-errors, jade, morgan, sqlite3, uuid.

Still contains the previous Lab pages: author, houses, index, info, reviews, sequels, setting

New pages for this homework assignment: user, signup, login, catalog and error (error.ejs in views)

Website is inside Website map, so run cd Website. Then npm start, to get start the dependencies.

Images are a bit low quality, but that does not really matter.

Database contains user, book and reservation info, on catalog page everything is pulled from there and there is a  check if the user is logged in or not, and reservations are added in the database, as well as new accounts. 
# Logins and passwords of all registered users.
Username : Password

Alexander : test

Liselot : test

Jieni : test

Sergey : test3

yuh : yuh

# The SQL definition of your database (the CREATE TABLE statements).
``` SQLite
CREATE TABLE user(
user_id INTEGER (256) PRIMARY KEY AUTOINCREMENT,
    password VARCHAR(30) NOT NULL,
    first_name VARCHAR(256) NOT NULL,
    last_name VARCHAR(256) NOT NULL,
    address VARCHAR(256) NOT NULL,
    postcode VARCHAR(6) NOT NULL,
    telephone_number INTEGER(10) NOT NULL,
    date_of_birth INTEGER(8) NOT NULL,
    subscription_type VARCHAR(256) NOT NULL,
    payment_method VARCHAR(256) NOT NULL
);
```

``` SQLite
CREATE TABLE Book(
 Book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(256) NOT NULL,
    author VARCHAR(256) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(256) NOT NULL
);
```

``` SQLite
CREATE TABLE reservation(
reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    reservation_date INTEGER(8) NOT NULL,
    CONSTRAINT userid_fk FOREIGN KEY(user_id) REFERENCES user(user_id),
    CONSTRAINT bookid_fk FOREIGN KEY(book_id) REFERENCES book(book_id)
);
```

``` SQLite
INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The City of Brass(The Daevabad Trilogy, #1)',
        'S.A. Chakraborty',
        'Nahri has never believed in magic. Certainly, she has power; on the streets of 18th century Cairo, she’s a con woman of unsurpassed talent. But she knows better than anyone that the trade she uses to get by—palm readings, zars, healings—are all tricks, sleights of hand, learned skills; a means to the delightful end of swindling Ottoman nobles.

But when Nahri accidentally summons an equally sly, darkly mysterious djinn warrior to her side during one of her cons, shes forced to accept that the magical world she thought only existed in childhood stories is real. For the warrior tells her a new tale: across hot, windswept sands teeming with creatures of fire, and rivers where the mythical marid sleep; past ruins of once-magnificent human metropolises, and mountains where the circling hawks are not what they seem, lies Daevabad, the legendary city of brass, a city to which Nahri is irrevocably bound.

In that city, behind gilded brass walls laced with enchantments, behind the six gates of the six djinn tribes, old resentments are simmering. And when Nahri decides to enter this world, she learns that true power is fierce and brutal. That magic cannot shield her from the dangerous web of court politics. That even the cleverest of schemes can have deadly consequences.

After all, there is a reason they say be careful what you wish for...',
        '/books/book1.jpg'

    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'A Game of Thrones( A Song of Ice and Fire,#1)',
        'George R.R. Martin',
        ' Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdoms protective Wall. To the south, the kings powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the kings new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.

Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.',
        '/books/book2.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Stardust',
        'Neil Gaiman',
        'Young Tristran Thorn will do anything to win the cold heart of beautiful Victoria—even fetch her the star they watch fall from the night sky. But to do so, he must enter the unexplored lands on the other side of the ancient wall that gives their tiny village its name. Beyond that old stone wall, Tristran learns, lies Faerie—where nothing not even a fallen star, is what he imagined.',
        '/books/book3.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Kindred',
        'Octivia E. Butler',
        'The visionary authors masterpiece pulls us—along with her Black female hero—through time to face the horrors of slavery and explore the impacts of racism, sexism, and white supremacy then and now.

Dana, a modern Black woman, is celebrating her 26th birthday with her new husband when she is snatched abruptly from her home in California and transported to the antebellum South. Rufus, the white son of a plantation owner, is drowning, and Dana has been summoned to save him. Dana is drawn back repeatedly through time to the slave quarters, and each time the stay grows longer, more arduous, and more dangerous until it is uncertain whether or not Danas life will end, long before it has a chance to begin.',
        '/books/book4.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Children of Blood and Bone (Legacy of Orïsha, #1)',
        'Tomi Adeyemi',
        'Zélie Adebola remembers when the soil of Orïsha hummed with magic. Burners ignited flames, Tiders beckoned waves, and Zélies Reaper mother summoned forth souls.

But everything changed the night magic disappeared. Under the orders of a ruthless king, maji were killed, leaving Zélie without a mother and her people without hope.

Now Zélie has one chance to bring back magic and strike against the monarchy. With the help of a rogue princess, Zélie must outwit and outrun the crown prince, who is hell-bent on eradicating magic for good.

Danger lurks in Orïsha, where snow leoponaires prowl and vengeful spirits wait in the waters. Yet the greatest danger may be Zélie herself as she struggles to control her powers and her growing feelings for an enemy.',
        '/books/book5.jpg');

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Secrets of the Kharon',
        'M.J. Hewitt',
        '“Secrets of the Kharon” is a library of dark shadows, where we have indulged our deepest fascinations and fears. In its corridors are hidden vaults, shadowy stories and poems that may be read as and when you desire most.

Life is a wondrous tapestry of lightness and dark. People throughout history have fought to comprehend that subtle interplay of darkness with light. This evocative collection of short stories and poems are set in that fantastical void between our physical lives and those unseen dimensions outside the predictable and mundane. Take heed!

“Be entranced and beguiled. Be excited and defiled. Be tearful and reviled.
Beware the Kharons icy claw, It grasps with intent at human thought. Dead fingers clutch at the darkness that lives herein.

The Kharon relentlessly imbibes all mortal life-sparks, Transitioning human essence from life to death. They wander for eternity in empty fields, beyond the river of souls.”',
        '/books/book6.jpg');

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Night Circus',
        'Erin Morgenstern',
        'The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.

But behind the scenes, a fierce competition is underway—a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them, this is a game in which only one can be left standing, and the circus is but the stage for a remarkable battle of imagination and will. Despite themselves, however, Celia and Marco tumble headfirst into love—a deep, magical love that makes the lights flicker and the room grow warm whenever they so much as brush hands.

True love or not, the game must play out, and the fates of everyone involved, from the cast of extraordinary circus performers to the patrons, hang in the balance, suspended as precariously as the daring acrobats overhead. ',
        '/books/book7.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Buried Giant',
        'Kazuo Ishiguro',
        'The Buried Giant begins as a couple set off across a troubled land of mist and rain in the hope of finding a son they have not seen in years.

Sometimes savage, often intensely moving, Kazuo Ishiguro’s first novel in nearly a decade is about lost memories, love, revenge, and war.
',
        '/books/book8.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Library at Mount Char',
        'Scott Hawkins',
        'Carolyn’s not so different from the other people around her. She likes guacamole and cigarettes and steak. She knows how to use a phone. Clothes are a bit tricky, but everyone says nice things about her outfit with the Christmas sweater over the gold bicycle shorts. After all, she was a normal American herself once.

That was a long time ago, of course. Before her parents died. Before she and the others were taken in by the man they called Father. In the years since then, Carolyn hasn’t had a chance to get out much. Instead, she and her adopted siblings have been raised according to Father’s ancient customs. They’ve studied the books in his Library and learned some of the secrets of his power. And sometimes, they’ve wondered if their cruel tutor might secretly be God.  Now, Father is missing—perhaps even dead—and the Library that holds his secrets stands unguarded. And with it, control over all of creation.

As Carolyn gathers the tools she needs for the battle to come, fierce competitors for this prize align against her, all of them with powers that far exceed her own. But Carolyn has accounted for this. And Carolyn has a plan. The only trouble is that in the war to make a new God, she’s forgotten to protect the things that make her human.

Populated by an unforgettable cast of characters and propelled by a plot that will shock you again and again, The Library at Mount Char is at once horrifying and hilarious, mind-blowingly alien and heartbreakingly human, sweepingly visionary and nail-bitingly thrilling—and signals the arrival of a major new voice in fantasy.
',
        '/books/book9.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Ring Shout',
        'P. Djèlí Clark',
        'In 1915, The Birth of a Nation cast a spell across America, swelling the Klan’s ranks and drinking deep from the darkest thoughts of white folk. All across the nation they ride, spreading fear and violence among the vulnerable. They plan to bring Hell to Earth. But even Ku Kluxes can die.

Standing in their way is Maryse Boudreaux and her fellow resistance fighters, a foul-mouthed sharpshooter and a Harlem Hellfighter. Armed with blade, bullet, and bomb, they hunt their hunters and send the Klan’s demons straight to Hell. But something awful’s brewing in Macon, and the war on Hell is about to heat up.',
        '/books/book10.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Other City(Czech Literature Series)',
        'Michal Ajvaz',
        'In this strange and lovely hymn to Prague, Michal Ajvaz repopulates the city of Kafka with ghosts, eccentrics, talking animals, and impossible statues, all lurking on the peripheries of a town so familiar to tourists. The Other City is a guidebook to this invisible, ’other Prague,’ overlapping the workaday world: a place where libraries can turn into jungles, secret passages yawn beneath our feet, and waves lap at our bedspreads. Heir to the tradition and obsessions of Jorge Luis Borges, as well as the long and distinguished line of Czech fantasists, Ajvaz’s Other City—his first novel to be translated into English—is the emblem of all the worlds we are blind to, being caught in our own ways of seeing.',
        '/books/book11.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Sorcerer of the Wildeeps (The Sorcerer of the Wildeeps #1)',
        'Kai Ashante Wilson',
        'Since leaving his homeland, the earthbound demigod Demane has been labeled a sorcerer. With his ancestors’ artifacts in hand, the Sorcerer follows the Captain, a beautiful man with song for a voice and hair that drinks the sunlight.

The two of them are the descendants of the gods who abandoned the Earth for Heaven, and they will need all the gifts those divine ancestors left to them to keep their caravan brothers alive.

The one safe road between the northern oasis and southern kingdom is stalked by a necromantic terror. Demane may have to master his wild powers and trade humanity for godhood if he is to keep his brothers and his beloved captain alive.',
        '/books/book12.jpg');

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Unfinished World and Other Stories',
        'Amber Sparks',
        'In the weird and wonderful tradition of Kelly Link and Karen Russell, Amber Sparks dazzling new collection bursts forth with stories that render the apocalyptic and otherworldly hauntingly familiar. In “The Cemetery for Lost Faces,” two orphans translate their grief into taxidermy, artfully arresting the passage of time. The anchoring novella, “The Unfinished World,” unfurls a surprising love story between a free and adventurous young woman and a dashing filmmaker burdened by a mysterious family. Sparkss stories—populated with sculptors, librarians, astronauts, and warriors—form a veritable cabinet of curiosities. Mythical, bizarre, and deeply moving, The Unfinished World and Other Stories heralds the arrival of a major writer and illuminates the search for a brief encounter with the extraordinary. ',
        '/books/book13.jpg');

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Witchmark (The Kingston Cycle #1)',
        'C.L. Polk',
        'C. L. Polk arrives on the scene with Witchmark, a stunning, addictive fantasy that combines intrigue, magic, betrayal, and romance.

In an original world reminiscent of Edwardian England in the shadow of a World War, cabals of noble families use their unique magical gifts to control the fates of nations, while one young man seeks only to live a life of his own.

Magic marked Miles Singer for suffering the day he was born, doomed either to be enslaved to his familys interest or to be committed to a witches’ asylum. He went to war to escape his destiny and came home a different man, but he couldnt leave his past behind. The war between Aeland and Laneer leaves men changed, strangers to their friends and family, but even after faking his own death and reinventing himself as a doctor at a cash-strapped veterans’ hospital, Miles cant hide what he truly is.

When a fatally poisoned patient exposes Miles healing gift and his witchmark, he must put his anonymity and freedom at risk to investigate his patients murder. To find the truth hell need to rely on the family he despises, and on the kindness of the most gorgeous man hes ever seen. ',
        '/books/book14.jpg'
     );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Tales of Falling and Flying',
        'Ben Loory',
        'Named a Favorite Book of 2017 by the staff of the Paris Review,
one of the 50 Best Fantasy Books of All Time by Esquire Magazine,
and one of the 25 Best Fantasy Books of All Time by Good Housekeeping.

’Loory is the psychedelic Aesop of our modern age.’ --Scott McClanahan, author of The Sarah Book

’One of my favorite writers.’ --Peter Straub, author of Ghost Story

A dazzling new collection of stories from the critically acclaimed author of Stories for Nighttime and Some for The Day

Ben Loory returns with a second collection of timeless tales, inviting us to enter his worlds of whimsical fantasy, deep empathy, and playful humor, in the signature voice that drew readers to his highly praised first collection. In stories that eschew literary realism, Loory’s characters demonstrate richly imagined and surprising perspectives, whether they be dragons or swordsmen, star-crossed lovers or long-lost twins, restaurateurs dreaming of Paris or cephalopods fixated on space travel. In propulsive language that brilliantly showcases Loory’s vast imagination, Tales of Falling and Flying expands our understanding of how fiction can work and is sure to cement his reputation as one of the most innovative short-story writers working today.',
        '/books/book15.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'What Should Be Wild',
        'Julia Fine',
        'In this darkly funny, striking debut, a highly unusual young woman must venture into the woods at the edge of her home to remove a curse that has plagued the women in her family for millennia—an utterly original novel with all the mesmerizing power of The Tigers Wife, The Snow Child, and Swamplandia!

Cursed. Maisie Cothay has never known the feel of human flesh: born with the power to kill or resurrect at her slightest touch, she has spent her childhood sequestered in her familys manor at the edge of a mysterious forest. Maisies father, an anthropologist who sees her as more experiment than daughter, has warned Maisie not to venture into the wood. Locals talk of men disappearing within, emerging with addled minds and strange stories. What he does not tell Maisie is that for over a millennium her female ancestors have also vanished into the wood, never to emerge—for she is descended from a long line of cursed women.

But one day Maisies father disappears, and Maisie must venture beyond the walls of her carefully constructed life to find him. Away from her home and the wood for the very first time, she encounters a strange world filled with wonder and deception. Yet the farther she strays, the more the wood calls her home. For only there can Maisie finally reckon with her power and come to understand the wildest parts of herself.',
        '/books/book16.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'A Darker Shade of Magic(Shades of Magic #1)',
        'V.E. Schwab',
        'Kell is one of the last Antari—magicians with a rare, coveted ability to travel between parallel Londons; Red, Grey, White, and, once upon a time, Black.

Kell was raised in Arnes—Red London—and officially serves the Maresh Empire as an ambassador, traveling between the frequent bloody regime changes in White London and the court of George III in the dullest of Londons, the one without any magic left to see.

Unofficially, Kell is a smuggler, servicing people willing to pay for even the smallest glimpses of a world they’ll never see. It’s a defiant hobby with dangerous consequences, which Kell is now seeing firsthand.

After an exchange goes awry, Kell escapes to Grey London and runs into Delilah Bard, a cut-purse with lofty aspirations. She first robs him, then saves him from a deadly enemy, and finally forces Kell to spirit her to another world for a proper adventure.

Now perilous magic is afoot, and treachery lurks at every turn. To save all of the worlds, they’ll first need to stay alive.',
        '/books/book17.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Vorrh(The Vorrh Trilogy #1)',
        'Brian Catling, Alan Moore',
        'Prepare to lose yourself in the heady, mythical expanse of The Vorrh, a daring debut that Alan Moore has called “a phosphorescent masterpiece” and “the current century’s first landmark work of fantasy.”

Next to the colonial town of Essenwald sits the Vorrh, a vast—perhaps endless—forest. It is a place of demons and angels, of warriors and priests. Sentient and magical, the Vorrh bends time and wipes  memory. Legend has it that the Garden of Eden still exists at its heart. Now, a renegade English soldier aims to be the first human to traverse its expanse. Armed with only a strange bow, he begins his journey, but some fear the consequences of his mission, and a native marksman has been chosen to stop him. Around them swirl a remarkable cast of characters, including a Cyclops raised by robots and a young girl with tragic curiosity, as well as historical figures, such as writer Raymond Roussel, heiress Sarah Winchester, and photographer Edward Muybridge.  While fact and fiction blend, the hunter will become the hunted, and everyones fate hangs in the balance under the will of the Vorrh.',
        '/books/book18.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Tigana',
        'Guy Gavriel Kay',
        'A masterful epic of magic, politics, war, and the power of love and hate — from the renowned author of The Fionavar Tapestry and Children of Earth and Sky.

Tigana is the magical story of a beleaguered land struggling to be free. It is the tale of a people so cursed by the black sorcery of a cruel despotic king that even the name of their once-beautiful homeland cannot be spoken or remembered...

But years after the devastation, a handful of courageous men and women embark upon a dangerous crusade to overthrow their conquerors and bring back to the dark world the brilliance of a long-lost name...Tigana.

Against the magnificently rendered background of a world both sensuous and barbaric, this sweeping epic of a passionate people pursuing their dream is breathtaking in its vision, changing forever the boundaries of fantasy fiction.',
        '/books/book19.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Black Tides of Heaven(Tensorate #1)',
        'Neon Yang',
        'The Black Tides of Heaven is one of a pair of standalone introductions to Neon Yang’s Tensorate Series. For more of the story you can read its twin novella The Red Threads of Fortune

Mokoya and Akeha, the twin children of the Protector, were sold to the Grand Monastery as children. While Mokoya developed her strange prophetic gift, Akeha was always the one who could see the strings that moved adults to action. While his sister received visions of what would be, Akeha realized what could be. What’s more, he saw the sickness at the heart of his mother’s Protectorate.

A rebellion is growing. The Machinists discover new levers to move the world every day, while the Tensors fight to put them down and preserve the power of the state. Unwilling to continue to play a pawn in his mother’s twisted schemes, Akeha leaves the Tensorate behind and falls in with the rebels. But every step Akeha takes towards the Machinists is a step away from his sister Mokoya. Can Akeha find peace without shattering the bond he shares with his twin sister?',
        '/books/book20.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Subtle Knife(His Dark Materials #2)',
        'Philip Pullman',
        'She had asked: What is he? A friend or an enemy?

The alethiometer answered: He is a murderer.

When she saw the answer, she relaxed at once.

Lyra finds herself in a shimmering, haunted otherworld – Cittàgazze, where soul-eating Spectres stalk the streets and wingbeats of distant angels sound against the sky.

But she is not without allies: twelve-year-old Will Parry, fleeing for his life after taking another’s, has also stumbled into this strange new realm.

On a perilous journey from world to world, Lyra and Will uncover a deadly secret: an object of extraordinary and devastating power.

And with every step, they move closer to an even greater threat – and the shattering truth of their own destiny.',
        '/books/book21.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Queen of the Conquered(Islands of Blood and Storm #1)',
        'Kacen Callender',
        'An ambitious young woman with the power to control minds seeks vengeance against the royals who murdered her family, in a Caribbean-inspired fantasy world embattled by colonial oppression.

Sigourney Rose is the only surviving daughter of a noble lineage on the islands of Hans Lollik. When she was a child, her family was murdered by the islands colonizers, who have massacred and enslaved generations of her people—and now, Sigourney is ready to exact her revenge.

When the childless king of the islands declares that he will choose his successor from amongst eligible noble families, Sigourney uses her ability to read and control minds to manipulate her way onto the royal island and into the ranks of the ruling colonizers. But when she arrives, prepared to fight for control of all the islands, Sigourney finds herself the target of a dangerous, unknown magic.

Someone is killing off the ruling families to clear a path to the throne. As the bodies pile up and all eyes regard her with suspicion, Sigourney must find allies among her prey and the murderer among her peers... lest she become the next victim.

Queen of the Conquered reckons with the many layers of power and privilege in a lush fantasy world—perfect for readers of V. E. Schwab, Kiersten White, and Marlon James.',
        '/books/book22.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Kalpa Imperial: The Greatest Empire That Never Was',
        'Angélica Gorodischer, Ursula K. Le Guin',
        'This is the first of Argentinean writer Angelica Gorodischer’s nineteen award-winning Books to be translated into English. In eleven chapters, ’Kalpa Imperial ’’s multiple storytellers relate the story of a fabled nameless empire which has risen and fallen innumerable times. Fairy tales, oral histories and political commentaries are all woven tapestry-style into Kalpa Imperial: beggars become emperors, democracies become dictatorships, and history becomes legends and stories.
But this is much more than a simple political allegory or fable. It is also a celebration of the power of storytelling. Gorodischer and translator Ursula K. Le Guin are a well-matched, sly and delightful team of magician-storytellers. Rarely have author and translator been such an effortless pairing. ’ Kalpa Imperial ’ is a powerful introduction to the writing of Angelica Gorodischer, a novel which will enthrall readers already familiar with the worlds of Le Guin.',
        '/books/book23.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Blue Fox',
        'Sjón, Victoria Cribb ',
        'WINNER OF THE NORDIC LITERARY PRIZE AND NOMINATED FOR THE ICELANDIC LITERATURE PRIZE

The year is 1883. The stark Icelandic winter landscape is the backdrop. We follow the priest, Skugga-Baldur, on his hunt for the enigmatic blue fox. From there were then transported to the world of the naturalist Friðrik B. Friðriksson and his charge, Abba, who suffers from Downs syndrome, and who came to his rescue when he was on the verge of disaster. Then to a shipwreck off the Icelandic coast in the spring of 1868.

The fates of all these characters are intrinsically bound, and gradually, surprisingly, unravelled in this spellbinding fable that is part mystery, part fairy tale.


Sjón is a celebrated Icelandic poet and novelist. His novels have been translated into twenty-five languages and include From the Mouth of the Whale and The Whispering Muse (both by Telegram). Sjón won the Nordic Council Literary Prize, the equivalent of the Man Booker Prize, for The Blue Fox and ’ Best Icelandic Novel ’ for The Whispering Muse in 2005. Also a songwriter, he has written lyrics for Björk, including for her eight studio album, Biophilia.',
        '/books/book24.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Where the Mountain Meets the Moon',
        'Grace Lin',
        'In the valley of Fruitless Mountain, a young girl named Minli spends her days working hard in the fields and her nights listening to her father spin fantastic tales about the Jade Dragon and the Old Man of the Moon. Minli’s mother, tired of their poor life, chides him for filling her head with nonsense. But Minli believes these enchanting stories and embarks on an extraordinary journey to find the Old Man of the Moon and ask him how her family can change their fortune. She encounters an assorted cast of characters and magical creatures along the way, including a dragon who accompanies her on her quest. ',
        '/books/book25.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Get in Trouble',
        'Kelly Link',
        'She has been hailed by Michael Chabon as “the most darkly playful voice in American fiction” and by Neil Gaiman as “a national treasure.” Now Kelly Links eagerly awaited new collection—her first for adult readers in a decade—proves indelibly that this bewitchingly original writer is among the finest we have.

Link has won an ardent following for her ability to take readers deep into an unforgettable, brilliantly constructed fictional universe with each new story. In “The Summer People,” a young girl in rural North Carolina serves as uneasy caretaker to the mysterious, never-quite-glimpsed visitors who inhabit the cottage behind her house. In “I Can See Right Through You,” a middle-aged movie star makes a disturbing trip to the Florida swamp where his former on- and off-screen love interest is shooting a ghost-hunting reality show. In “The New Boyfriend,” a suburban slumber party takes an unusual turn, and a teenage friendship is tested, when the spoiled birthday girl opens her big present: a life-size animated doll.

Hurricanes, astronauts, evil twins, bootleggers, Ouija boards, iguanas, The Wizard of Oz, superheroes, the Pyramids...These are just some of the talismans of an imagination as capacious and as full of wonder as that of any writer today. But as fantastical as these stories can be, they are always grounded in sly humor and an innate generosity of feeling for the frailty—and the hidden strengths—of human beings. In Get in Trouble, this one-of-a-kind talent expands the boundaries of what short fiction can do.',
        '/books/book26.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Redemption in Indigo',
        'Karen Lord',
        'Paama’s husband is a fool and a glutton. Bad enough that he followed her to her parents’ home in the village of Makendha, now he’s disgraced himself by murdering livestock and stealing corn. When Paama leaves him for good, she attracts the attention of the undying ones – the djombi – who present her with a gift: the Chaos Stick, which allows her to manipulate the subtle forces of the world.

Unfortunately, not all the djombi are happy about this gift: the Indigo Lord believes this power should be his and his alone, and he sets about trying to persuade Paama to return the Chaos Stick.',
        '/books/book27.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Foundryside(The Founders Trilogy #1)',
        'Robert Jackson Bennett',
        'Sancia Grado is a thief, and a damn good one. And her latest target, a heavily guarded warehouse on Tevannes docks, is nothing her unique abilities cant handle.

But unbeknownst to her, Sancias been sent to steal an artifact of unimaginable power, an object that could revolutionize the magical technology known as scriving. The Merchant Houses who control this magic--the art of using coded commands to imbue everyday objects with sentience--have already used it to transform Tevanne into a vast, remorseless capitalist machine. But if they can unlock the artifacts secrets, they will rewrite the world itself to suit their aims.

Now someone in those Houses wants Sancia dead, and the artifact for themselves. And in the city of Tevanne, theres nobody with the power to stop them.

To have a chance at surviving—and at stopping the deadly transformation thats under way—Sancia will have to marshal unlikely allies, learn to harness the artifacts power for herself, and undergo her own transformation, one that will turn her into something she could never have imagined.',
        '/books/book28.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Moon Witch, Spider King(The Dark Star Trilogy #2)',
        'Marlon James',
        'From Marlon James, author of the bestselling National Book Award finalist Black Leopard, Red Wolf, the second Book in the Dark Star trilogy, his African Game of Thrones.

In Black Leopard, Red Wolf, Sogolon the Moon Witch proved a worthy adversary to Tracker as they clashed across a mythical African landscape in search of a mysterious boy who disappeared. In Moon Witch, Spider King, Sogolon takes center stage and gives her own account of what happened to the boy, and how she plotted and fought, triumphed and failed as she looked for him. Its also the story of a century-long feud—seen through the eyes of a 177-year-old witch—that Sogolon had with the Aesi, chancellor to the king. It is said that Aesi works so closely with the king that together they are like the eight limbs of one spider. Aesis power is considerable—and deadly. It takes brains and courage to challenge him, which Sogolon does for reasons of her own.

Both a brilliant narrative device—seeing the story told in Black Leopard, Red Wolf from the perspective of an adversary and a woman—as well as a fascinating battle between different versions of empire, Moon Witch, Spider King delves into Sogolons world as she fights to tell her own story. Part adventure tale, part chronicle of an indomitable woman who bows to no man, it is a fascinating novel that explores power, personality, and the places where they overlap.',
        '/books/book29.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Drowned Life',
        'Jeffrey Ford',
        'There is a town that brews a strange intoxicant from a rare fruit called the deathberry—and once a year a handful of citizens are selected to drink it. . . .

There is a life lived beneath the water—among rotted buildings and bloated corpses—by those so overburdened by the world’s demands that they simply give up and go under. . . .

In this mesmerizing blend of the familiar and the fantastic, multiple award-winning New York Times notable author Jeffrey Ford creates true wonders and infuses the mundane with magic. In tales marked by his distinctive, dark imagery and fluid, exhilarating prose, he conjures up an annual gale that transforms the real into the impossible, invents a strange scribble that secretly unites a significant portion of society, and spins the myriad dreams of a restless astronaut and his alien lover. Bizarre, beautiful, unsettling, and sublime, The Drowned Life showcases the exceptional talents of one of contemporary fiction’s most original artists.',
        '/books/book30.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Uprooted',
        'Naomi Novik',
        'Agnieszka loves her valley home, her quiet village, the forests and the bright shining river. But the corrupted Wood stands on the border, full of malevolent power, and its shadow lies over her life.

Her people rely on the cold, driven wizard known only as the Dragon to keep its powers at bay. But he demands a terrible price for his help: one young woman handed over to serve him for ten years, a fate almost as terrible as falling to the Wood.

The next choosing is fast approaching, and Agnieszka is afraid. She knows—everyone knows—that the Dragon will take Kasia: beautiful, graceful, brave Kasia, all the things Agnieszka isnt, and her dearest friend in the world. And there is no way to save her.

But Agnieszka fears the wrong things. For when the Dragon comes, it is not Kasia he will choose.',
        '/books/book31.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Bird King',
        'G. Willow Wilson
',
        'New from the award-winning author of Alif the Unseen and writer of the Ms. Marvel series, G. Willow Wilson

Set in 1491 during the reign of the last sultanate in the Iberian peninsula, The Bird King is the story of Fatima, the only remaining Circassian concubine to the sultan, and her dearest friend Hassan, the palace mapmaker.

Hassan has a secret--he can draw maps of places he’s never seen and bend the shape of reality. When representatives of the newly formed Spanish monarchy arrive to negotiate the sultan’s surrender, Fatima befriends one of the women, not realizing that she will see Hassan’s gift as sorcery and a threat to Christian Spanish rule. With their freedoms at stake, what will Fatima risk to save Hassan and escape the palace walls?

As Fatima and Hassan traverse Spain with the help of a clever jinn to find safety, The Bird King asks us to consider what love is and the price of freedom at a time when the West and the Muslim world were not yet separate.',
        '/books/book32.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Changeling',
        'Victor LaValle',
        'When Apollo Kagwas father disappeared, all he left his son were strange recurring dreams and a box of Books stamped with the word IMPROBABILIA. Now Apollo is a father himself–and as he and his wife, Emma, are settling into their new lives as parents, exhaustion and anxiety start to take their toll. Apollos old dreams return and Emma begins acting odd. Irritable and disconnected from their new baby boy, at first Emma seems to be exhibiting signs of postpartum depression, but it quickly becomes clear that her troubles go even deeper. Before Apollo can do anything to help, Emma commits a horrific act–beyond any parents comprehension–and vanishes, seemingly into thin air.

Thus begins Apollos odyssey through a world he only thought he understood, to find a wife and child who are nothing like hed imagined. His quest, which begins when he meets a mysterious stranger who claims to have information about Emmas whereabouts, takes him to a forgotten island, a graveyard full of secrets, a forest where immigrant legends still live, and finally back to a place he thought he had lost forever.

This captivating retelling of a classic fairy tale imaginatively explores parental obsession, spousal love, and the secrets that make strangers out of the people we love the most. Its a thrilling and emotionally devastating journey through the gruesome legacies that threaten to devour us and the homely, messy magic that saves us, if were lucky.',
        '/books/book33.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Way of Kings(The Stormlight Archive #1)',
        'Brandon Sanderson',
        'From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, Book one of The Stormlight Archive begins an incredible new saga of epic proportion.

Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.

It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them.

One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.

Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.

Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar’s niece, Jasnah. Though she genuinely loves learning, Shallan’s motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.

The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.

Speak again the ancient oaths:

Life before death.
Strength before weakness.
Journey before Destination.

and return to men the Shards they once bore.
',
        '/books/book34.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Shadow Rising(The Wheel of Time #4)',
        'Robert Jordan',
        'The seals of Shayol Ghul are weak now, and the Dark One reaches out. The Shadow is rising to cover humankind.

In Tar Valon, Min sees portents of hideous doom. Will the White Tower itself be broken?

In the Two Rivers, the Whitecloaks ride in pursuit of a man with golden eyes, and in pursuit of the Dragon Reborn.

In Cantorin, among the Sea Folk, High Lady Suroth plans the return of the Seanchan armies to the mainland.

In the Stone of Tear, the Lord Dragon considers his next move. It will be something no one expects, not the Black Ajah, not Tairen nobles, not Aes Sedai, not Egwene or Elayne or Nynaeve.

Against the Shadow rising stands the Dragon Reborn.....',
        '/books/book35.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Ozma of Oz(Oz #3)',
        'L. Frank Baum',
        'Readers of all ages will welcome the chance to be reunited with Dorothy Gale and such beloved characters as the Scarecrow, Tin Woodman, and Cowardly Lion, as well as to meet new favorites such as the Hungry Tiger, whose appetite is never satisfied; Princess Langwidere, who has thirty heads; Billina, a talking chicken; and Tiktok, a mechanical man.

Blown overboard while sailing with her uncle, Dorothy finds herself in the fairy realm of Ev. She sets out with her friends to rescue the Queen of Ev and her ten children, who have been imprisoned by the cruel Nome King. But even Ozma, the wise Ruler of Oz, is no match for the clever king, and it’s up to Dorothy to save everyone
        from
            terrible danger.But will the Nome King’s enchantments be too much even for the plucky little girl from Kansas?',
        '/books/book36.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        '
	Once and Forever: The Tales of Kenji Miyazawa ',
        'Kenji Miyazawa, John Bester',
        'It is time that Kenji Miyazawa, long recognized as a writer of genius in his own country, enjoyed the same reputation abroad. Are his fables, in which acorns quarrel and flowers fret about losing their looks, written for children or adults? They are for both: for adventurous young minds, but also for older readers in whom the spark of curiosity, combined with a taste for fantasy and a love of language, is still alight.This collection, appearing for the first time in paperback, brings together the best of his stories. They range from cautionary tales to small prose poems, from social satire to unmistakable tragedy. All share an intense delight in the natural world -- a sense of oneness with other living creatures and with the vast universe around us.

Miyazawa is entirely original. No other Japanese writer, before or since, has told stories as fresh in detail but universal in scope as this man who lived and died, still young, in Japan’s far north.',
        '/books/book37.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Voyage of the Dawn Treader (Chronicles of Narnia, #3)',
        'C.S. Lewis, Pauline Baynes',
        'NARNIA... the world of wicked dragons and magic spells, where the very best is brought out of even the worst people, where anything can happen (and most often does)... and where the adventure begins.

The Dawn Treader is the first ship Narnia has seen in centuries. King Caspian has built it for his voyage to find the seven lords, good men whom his evil uncle Miraz banished when he usurped the throne. The journey takes Edmund, Lucy, and their cousin Eustace to the Eastern Islands, beyond the Silver Sea, toward Aslan’s country at the End of the World.',
        '/books/book38.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Palm-Wine Drinkard & My Life in the Bush of Ghosts',
        'Amos Tutuola, Michael Thelwell (Introduction), Edward Geoffrey Parrinder ',
        'When Amos Tutuola’s first novel, The Palm-Wine Drinkard, appeared in 1952, it aroused exceptional worldwide interest. Drawing on the West African Yoruba oral folktale tradition, Tutuola described the odyssey of a devoted palm-wine drinker through a nightmare of fantastic adventure. Since then, The Palm-Wine Drinkard has been translated into more than 15 languages and has come to be regarded as a masterwork of one of Africa’s most influential writers. Tutuola’s second novel, My Life in the Bush of Ghosts, recounts the fate of mortals who stray into the world of ghosts, the heart of the tropical forest. Here, as every hunter and traveler knows, mortals venture at great peril, and it is here that a small boy is left alone.',
        '/books/book39.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Latro in the Mist (Latro #1-2)',
        'Gene Wolfe',
        'This omnibus of two acclaimed novels is the story of Latro, a Roman mercenary who while fighting in Greece received a head injury that deprived him of his short-term memory but gave him in return the ability to see and converse with the supernatural creatures and the gods and goddesses, who invisibly inhabit the ancient landscape. Latro forgets everything when he sleeps. Writing down his experiences every day and reading his journal anew each morning gives him a poignantly tenuous hold on himself, but his story’s hold on readers is powerful indeed, and many consider these Wolfe’s best Books.',
        '/books/book40.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Bloody Chamber and Other Stories',
        'Angela Carter',
        'WITH AN INTRODUCTION BY HELEN SIMPSON From familiar fairy tales and legends - Red Riding Hood, Bluebeard, Puss in Boots, Beauty and the Beast, vampires and werewolves - Angela Carter has created an absorbing collection of dark, sensual, fantastic stories.',
        '/books/book41.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Book of Atrus (Myst, #1)',
        'Rand Miller, Robyn Miller, David Wingrove',
        'Based on the best-selling CD-ROM game, a fantasy novel fills out the lives of the game’s characters, tracing the strange apprenticeship of Atrus to his father, Gehn, who wields the power to create worlds.',
        '/books/book42.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Circe',
        'Madeline Miller',
        'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child--neither powerful like her father nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power: the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.

Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts, and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.

But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from or with the mortals she has come to love.',
        '/books/book43.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'A Stranger in Olondria',
        'Sofia Samatar',
        'Jevick, the pepper merchant’s son, has been raised on stories of Olondria, a distant land where Books are as common as they are rare in his home. When his father dies and Jevick takes his place on the yearly selling trip to Olondria, Jevick’s life is as close to perfect as he can imagine. But just as he revels in Olondria’s Rabelaisian Feast of Birds, he is pulled drastically off course and becomes haunted by the ghost of an illiterate young girl.

In desperation, Jevick seeks the aid of Olondrian priests and quickly becomes a pawn in the struggle between the empire’s two most powerful cults. Yet even as the country shimmers on the cusp of war, he must face his ghost and learn her story before he has any chance of becoming free by setting her free: an ordeal that challenges his understanding of art and life, home and exile, and the limits of that seductive necromancy, reading.

A Stranger in Olondria is a skillful and immersive debut fantasy novel that pulls the reader in deeper and deeper with twists and turns reminiscent of George R. R. Martin and Joe Hill.

Sofia Samatar is an American of Somali and Swiss German Mennonite background. She wrote A Stranger in Olondria in Yambio, south Sudan, where she worked as an English teacher. She has worked in Egypt and is pursuing a PhD in African languages and literature at the University of Madison, Wisconsin.',
        '/books/book44.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Jonathan Strange & Mr. Norrell ',
        'Susanna Clarke',
        'The year is 1806. England is beleaguered by the long war with Napoleon, and centuries have passed since practical magicians faded into the nation’s past. But scholars of this glorious history discover that one remains: the reclusive Mr Norrell, whose displays of magic send a thrill through the country.

Proceeding to London, he raises a beautiful woman from the dead and summons an army of ghostly ships to terrify the French. Yet the cautious, fussy Norrell is challenged by the emergence of another magician: the brilliant novice Jonathan Strange.

Young, handsome and daring, Strange is the very antithesis of Norrell. So begins a dangerous battle between these two great men which overwhelms that between England and France. And their own obsessions and secret dabblings with the dark arts are going to cause more trouble than they can imagine.',
        '/books/book45.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'A Hero Born (Legends of the Condor Heroes, #1)',
        'Jin Yong, Anna Holmwood ',
        'China: 1200 A.D. The Song Empire has been invaded by its warlike Jurchen neighbours from the north. Half its territory and its historic capital lie in enemy hands; the peasants toil under the burden of the annual tribute demanded by the victors. Meanwhile, on the Mongolian steppe, a disparate nation of great warriors is about to be united by a warlord whose name will endure for eternity: Genghis Khan. Guo Jing, son of a murdered Song patriot, grew up with Genghis Khan’s army. He is humble, loyal, perhaps not altogether wise, and is fated from birth to one day confront an opponent who is the opposite of him in every way: privileged, cunning and flawlessly trained in the martial arts. Guided by his faithful shifus, The Seven Heroes of the South, Guo Jing must return to China - to the Garden of the Drunken Immortals in Jiaxing - to fulfil his destiny. But in a divided land riven by war and betrayal, his courage and his loyalties will be tested at every turn.',
        '/books/book46.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'Who Fears Death',
        'Nnedi Okorafor',
        'An award-winning literary author presents her first foray into supernatural fantasy with a novel of post-apocalyptic Africa.

In a far future, post-nuclear-holocaust Africa, genocide plagues one region. The aggressors, the Nuru, have decided to follow the Great Book and exterminate the Okeke. But when the only surviving member of a slain Okeke village is brutally raped, she manages to escape, wandering farther into the desert. She gives birth to a baby girl with hair and skin the color of sand and instinctively knows that her daughter is different. She names her daughter Onyesonwu, which means ’ Who Fears Death ? ’ in an ancient African tongue.

Reared under the tutelage of a mysterious and traditional shaman, Onyesonwu discovers her magical destiny – to end the genocide of her people. The journey to fulfill her destiny will force her to grapple with nature, tradition, history, true love, the spiritual mysteries of her culture – and eventually death itself.',
        '/books/book47.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Grace of Kings (The Dandelion Dynasty, #1)',
        'Ken Liu
',
        'Wily, charming Kuni Garu, a bandit, and stern, fearless Mata Zyndu, the son of a deposed duke, seem like polar opposites. Yet, in the uprising against the emperor, the two quickly become the best of friends after a series of adventures fighting against vast conscripted armies, silk-draped airships, and shapeshifting gods. Once the emperor has been overthrown, however, they each find themselves the leader of separate factions—two sides with very different ideas about how the world should be run and the meaning of justice.',
        '/books/book48.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'A Wizard of Earthsea (Earthsea Cycle, #1)',
        'Ursula K. Le Guin',
        'Ged, the greatest sorcerer in all Earthsea, was called Sparrowhawk in his reckless youth.

Hungry for power and knowledge, Sparrowhawk tampered with long-held secrets and loosed a terrible shadow upon the world. This is the tale of his testing, how he mastered the mighty words of power, tamed an ancient dragon, and crossed death’s threshold to restore the balance.',
        '/books/book49.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Fellowship of the Ring (The Lord of the Rings, #1)',
        'J.R.R. Tolkien',
        'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.

In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.

In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.',
    '/books/book50.jpg'
    );

INSERT INTO
    Book (title, author, content, image)
VALUES
    (
        'The Fifth Season (The Broken Earth, #1)',
        'N.K. Jemisin',
        'Three terrible things happen in a single day. Essun, a woman living an ordinary life in a small town, comes home to find that her husband has brutally murdered their son and kidnapped their daughter. Meanwhile, mighty Sanze -- the world-spanning empire whose innovations have been civilization’s bedrock for a thousand years -- collapses as most of its citizens are murdered to serve a madman’s vengeance. And worst of all, across the heart of the vast continent known as the Stillness, a great red rift has been torn into the heart of the earth, spewing ash enough to darken the sky for years. Or centuries.

Now Essun must pursue the wreckage of her family through a deadly, dying land. Without sunlight, clean water, or arable land, and with limited stockpiles of supplies, there will be war all across the Stillness: a battle royale of nations not for power or territory, but simply for the basic resources necessary to get through the long dark night. Essun does not care if the world falls apart around her. She’ll break it herself, if she must, to save her daughter.',
        '/books/book51.jpg'
    );
```

``` SQLite
INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(1,
 4,
 01012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 3,
 11012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 12,
 21012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 32,
 19012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(4,
 45,
 11012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(3,
 21,
 01012001);
```

``` SQLite
INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (1,
     'test',
     'Alexander',
     'Le',
     'Utrecht',
     '1234AB',
     0600000000,
     01012000,
     'Student',
     'PayPal');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (2,
     'test1',
     'Liselot',
     'Ankone',
     'Arnhem',
     '1234AB',
     0600000001,
     01012001,
     'Teacher',
     'iDeal');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (3,
     'test2',
     'Jieni',
     'Ding',
     'Almere',
     '1234AD',
     0600000002,
     01012002,
     'Elderly',
     'Mastercard');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (4,
     'test3',
     'Sergey',
     'Sergenov',
     'Utrecht',
     '1234AE',
     0600000003,
     01012003,
     'Professor',
     'Visa');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (5,
     'test4',
     'Aditya',
     'Joshi',
     'Utrecht',
     '1234AF',
     0600000004,
     01012004,
     'Staff',
     'iDeal');

UPDATE user
SET subscription_type = 'Student'
WHERE user_id = 3;
```

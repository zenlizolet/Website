  //set the body id, used for styling
  document.body.setAttribute('id', "user__body");
  let mainElement = document.querySelector('main');

// Fetch user info from the API
fetch('/api/current-user')
    .then(response => response.json())
    .then(user => {
        var user_id = user.user_id;
        var password = user.password;
        var first_name = user.first_name;
        var last_name = user.last_name;
        var address = user.adress;
        var postcode = user.postcode;
        var telephone_number = user.telephone_number;
        var date_of_birth = user.date_of_birth;
        var subscription_type = user.subscription_type;
        var payment_method = user.payment_method;
        var username = user.username;

        // Create elements to display user info

        const usernameElement = document.createElement('h1');
        mainElement.appendChild(usernameElement);
        const fillertext = document.createElement('p');
           

        // Set user info
        usernameElement.textContent = user.name;
        //emailElement.textContent = user.email;
        fillertext.textContent = "Hier moet een users page komen, met alle informatie over de huidige ingelogde gebruiker, deze informatie staat onder de req.session. Nu staat er alleen nog maar de first name, maar dit moet nog aangepast worden in de current-user api (in app.js), it is really not that hard gewoon eventjes goed koekeloeren naar die api wat er nou allemaal precies gebeurt, pak desnoods dev tools dr bij daar staat als het goed is ook nog een console log. de API wordt namelijk gebruikt om de user data uit de backend te fetchen. However, ik had daar even geen zin meer in aangezien het nu 1:45 is en ik eigenlijk nu alleen nog maar wil rotten in mijn bed, dus voor nu laat ik het even zo en mag hier later naar gekeken worden. Door mij of iemand anders ;)";
        mainElement.appendChild(fillertext);
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', '../images/pls_delete_before_handing_in.gif');
        imageElement.style.width = '45%';
        mainElement.appendChild(imageElement);

    })
    .catch(error => {
        console.error('Error fetching user info:', error);
    });







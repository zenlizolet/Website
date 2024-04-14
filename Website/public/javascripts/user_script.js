  //set the body id, used for styling
  document.body.setAttribute('id', "user__body");
  let mainElement = document.querySelector('main');

// Fetch user info from the API
fetch('/api/current-user')
    .then(response => response.json())
    .then(user => {
        console.log(user);
        var user_id = user.user_id;
        var first_name = user.name;
        var last_name = user.last_name;
        var username = user.username;

        // Create elements to display user info
        const usernameElement = document.createElement('h1');
        mainElement.appendChild(usernameElement);
        const fillertext = document.createElement('p');

        usernameElement.textContent = username;
        const fullNameElement = document.createElement('p');
        fullNameElement.textContent = "Welcome " + first_name + " " +last_name + "!";
        fullNameElement.classList.add('full-name');
        mainElement.appendChild(fullNameElement);
        const userIdElement = document.createElement('p');
        userIdElement.textContent = "User ID: " + user_id;
        userIdElement.classList.add('user-id');
        mainElement.appendChild(userIdElement);
        fillertext.textContent = "Here you can find the information of your reservations";
        fillertext.classList.add('filler-text');
        mainElement.appendChild(fillertext);
    })
    .catch(error => {
        console.error('Error fetching user info:', error);
    });







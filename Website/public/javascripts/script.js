// This function will run when the page loads
window.onload = function () {
    
    url = window.location.href;
    createNavBar();
    createFooter();

    if (url.endsWith('info')) {
        createInfoPage();
    }

    console.log("The page has loaded!");
}

function createNav(pages, links, div ,ulClass) {
    var ul = document.createElement('ul');
    ul.className = ulClass;
    for (var i = 0; i < pages.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = pages[i];
        a.href = links[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    return div;
}

function createNavLeft() {
    var div = document.createElement('div');
    div.id = 'nav--left';
    var pages = ['Homepage', 'Author', 'Reviews', 'Setting', 'Houses', 'Sequels', 'Dynamic Page'];
    var links = ['/', 'author', 'reviews', 'setting', 'houses', 'sequels', 'info'];
    return createNav(pages, links,div, 'nav-left');
}

function createNavRight() {
    return new Promise((resolve, reject) => {
        var div = document.createElement('div');
        div.id = 'nav--right';
        var pages = ['Catalog'];
        var links = ['catalog.html'];

        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/current-user', true);

         xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.response);

                // Create an array of page names and links
                pages = ['Catalog'];
                links = ['catalog.html'];

                if (data && data.name !== undefined) {
                    pages.push('Log out');
                    links.push('/logout');
                    pages.push(data.name);
                    links.push('user.html');
                } else {
                    pages.push('Log in');
                    links.push('/login.html');
                    pages.push('Sign up');
                    links.push('/signup.html');
                }

                resolve(createNav(pages, links, div, 'nav-right'));
                
            } else {
                console.error('Server responded with status: ' + this.status);
                reject(this.status);
            }
        };

        xhr.onerror = function() {
            console.error('An error occurred while making the request.');
            reject(new Error('An error occurred while making the request.'));
        };

        // Send the request
        xhr.send();
    });
}

function createNavBar() {
    var nav = document.createElement('nav');
    var header = document.querySelector('header');

    nav.appendChild(createNavLeft());

    createNavRight().then(navRight => {
        nav.appendChild(navRight);
        header.appendChild(nav);
    }).catch(error => console.error('Error:', error));
    
}


/**
 * Creates a footer element with the menus to change the font size and color of the elements on the page
 */
function createFooter() {
    var footer = document.createElement('footer');
    var p = document.createElement('p');
    p.textContent = String.fromCharCode(169) + ' 2024 ASOIAF, Alexander Le, Jieni Ding, Liselot Ankone. All rights reserved.';
    footer.appendChild(p);

    var label1 = document.createElement('label');
    label1.setAttribute('for', 'element-select');
    label1.textContent = 'Choose an element:';
    footer.appendChild(label1);

    var select1 = document.createElement('select');
    select1.setAttribute('name', 'elements');
    select1.setAttribute('id', 'element-select');
    footer.appendChild(select1);

    var label2 = document.createElement('label');
    label2.setAttribute('for', 'style-select');
    label2.textContent = 'Change the appearance:';
    footer.appendChild(label2);

    var select2 = document.createElement('select');
    select2.setAttribute('id', 'style-select');
    footer.appendChild(select2);

    var option1 = document.createElement('option');
    option1.setAttribute('value', 'font-size');
    option1.setAttribute('id', 'font');
    option1.textContent = 'Font Size';
    select2.appendChild(option1);

    var option2 = document.createElement('option');
    option2.setAttribute('value', 'color');
    option2.setAttribute('id', 'color');
    option2.textContent = 'Color';
    select2.appendChild(option2);

    var input = document.createElement('input');
    input.setAttribute('type', 'color');
    input.setAttribute('id', 'choice-color');
    input.setAttribute('hidden', true);
    footer.appendChild(input);

    var select3 = document.createElement('select');
    select3.setAttribute('id', 'choice-font');
    footer.appendChild(select3);

    var sizes = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
    for (var i = 0; i < sizes.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', sizes[i]);
        option.textContent = sizes[i].charAt(0).toUpperCase() + sizes[i].slice(1);
        select3.appendChild(option);
    }

    var button = document.createElement('button');
    button.setAttribute('id', 'change-button');
    button.textContent = 'Change';
    footer.appendChild(button);

    var body = document.querySelector('body');
    body.appendChild(footer);
}


//This function creates a menu with all the different elements on the page
function createMenu() {
    const elementoptions = document.getElementById("element-select");
    //when we have not used elements in the page, they will not show up in the dropdown, but we have implemented them in the code as you can see below
    const elements = document.querySelectorAll(' body, header, footer, aside, article, section, nav');
    const uniqueElements = [];

    for (let i = 0; i < elements.length; ++i) {
        if (!uniqueElements.includes(elements[i].nodeName)) {
            const newOption = document.createElement('option');
            newOption.textContent = elements[i].nodeName;
            elementoptions.appendChild(newOption);
            uniqueElements.push(elements[i].nodeName)
        }
    }

    var styleButton = document.getElementById('change-button');
    styleButton.addEventListener('click', changeElement, false);


    var styleSelector = document.getElementById('style-select');
    styleSelector.addEventListener('change', changeStyle, false);

}

//This function changes the color or font of a selected section
function changeElement() {
    const fontSize = document.getElementById("choice-font").value;
    const colorValue = document.getElementById("choice-color").value;
    const elementOptions = document.getElementById("element-select").value;
    const selectedStyle = document.getElementById("style-select").value;
    const selectedElements = document.querySelectorAll(elementOptions);

    if (selectedStyle === "color") {
        for (let i = 0; i < selectedElements.length; ++i) { selectedElements[i].style.color = colorValue; }
    }
    else {
        for (let i = 0; i < selectedElements.length; ++i) { selectedElements[i].style.fontSize = fontSize; }
    }
}

//This function changes the currently visible property it needs to change
function changeStyle() {
    const selectedStyle = document.getElementById("style-select").value;

    if (selectedStyle === "color") {
        document.getElementById("choice-font").hidden = true;
        document.getElementById("choice-color").hidden = false;
    }
    else {
        document.getElementById("choice-font").hidden = false;
        document.getElementById("choice-color").hidden = true;
    }
}


window.addEventListener('load', createMenu, false);


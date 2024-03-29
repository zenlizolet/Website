// This function will run when the page loads
window.onload = function () {
    console.log("The page has loaded!");
    url = window.location.href;
    createNavBar();
    createFooter();

    if (url.endsWith('info.html')) {
        createInfoPage();
    }


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
};

function createNavLeft() {
    var div = document.createElement('div');
    div.id = 'nav--left';
    var pages = ['Homepage', 'Author', 'Reviews', 'Setting', 'Houses', 'Sequels', 'Dynamic Page'];
    var links = ['index.html', 'author.html', 'reviews.html', 'setting.html', 'houses.html', 'sequels.html', 'info.html'];
    return createNav(pages, links,div, 'nav-left');
};

function createNavRight() {
    var div = document.createElement('div');
    div.id = 'nav--right';
    var pages = ['Catalog', ' Login'];
    var links = ['catalog.html', 'login.html'];
    return createNav(pages, links,div, 'nav-right');
};

function createNavBar() {
    var nav = document.createElement('nav');
    nav.appendChild(createNavLeft());
    nav.appendChild(createNavRight());
    var header = document.querySelector('header');
    header.appendChild(nav);
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

    if (selectedStyle== "color") {
        document.getElementById("choice-font").hidden = true;
        document.getElementById("choice-color").hidden = false;
    }
    else {
        document.getElementById("choice-font").hidden = false;
        document.getElementById("choice-color").hidden = true;
    }
}


window.addEventListener('load', createMenu, false);


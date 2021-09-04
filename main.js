const dmToggle = (e, ...styles) => {
    styles.forEach(element => e.classList.toggle(element))
}

// ******** Toggle dark mode for orb color ********
const orbColor = () => {
    let darkModeOrb = document.querySelector('#dark-mode');

    dmToggle(darkModeOrb, 'from-yellow-200', 'via-yellow-300', 'to-red-600', 'from-gray-400', 'via-gray-300', 'to-gray-400', 'text-purple-800', 'border-purple-400', 'border-gray-200');
    switch (darkModeOrb.innerHTML.trim()) {
        case 'Sun Orb':
            darkModeOrb.innerHTML = 'Moon Orb'
            break;
        case 'Moon Orb':
            darkModeOrb.innerHTML = 'Sun Orb'
            break;
        default:
            console.log('Issue Detected: Switch statement for Orb is failing.')
    }

}

// ******** Toggle dark mode for options sectione ********
const optionColors = () => {
    let dmOptionsBox = document.querySelector('.dm-options');
    let button = document.querySelectorAll('button');

    // options-container background color
    dmToggle(dmOptionsBox, 'bg-gray-700', 'bg-gray-900');

    // change border colors for option-buttons
    button.forEach(element => {
        element.classList.toggle('border-gray-600')
    });
}

// ******** Toggle dark mode for body color ********
const bodyColor = () => {
    let dmTitle = document.querySelector('.dm-title');
    let body = document.querySelector('body');

    // page title color
    dmToggle(dmTitle, 'text-gray-700', 'text-gray-200');

    // webpage background color
    dmToggle(body, 'bg-gray-200', 'bg-gray-700')

}

// ******** Toggle dark mode for the adventure text box ********
const adventureBoxColor = () => {
    let dmAdventure = document.querySelector('.dm-adventure');

    // adventure text border color
    dmToggle(dmAdventure, 'bg-gray-700', 'bg-gray-900', 'text-gray-400')
}

// ******** Event Listener to Toggle dark mode ********
const darkModeListener = (event, action) => {
    let darkModeOrb = document.querySelector('#dark-mode');
    darkModeOrb.addEventListener(event, action);
}

// ******** Toggle Dark Mode ********
const darkMode = () => {
    darkModeListener('click', orbColor);
    darkModeListener('click', bodyColor);
    darkModeListener('click', optionColors);
    darkModeListener('click', adventureBoxColor);
}

darkMode()

const addClass = (e, newClass) => {
    e.classList.add(newClass)
}

const mobileOptionButtonPosition = () => {
    const screenSize = window.screen.height;
    const buttonWrapper = document.querySelector('.btn-wrapper');
    const buttonOptions = document.querySelector('.dm-options');
    const imageWrapper = document.querySelector('.image-wrapper');

    switch (screenSize) {
        case 667:
            addClass(buttonWrapper, 'mt-0');
            break;
        case 736:
            addClass(buttonWrapper, 'mt-24');
            addClass(buttonOptions, 'rounded-md');
            break;
        case 740:
            addClass(buttonWrapper, 'screen-740');
            break;
        case 812:
            addClass(imageWrapper, 'mt-20');
            addClass(buttonWrapper, 'mt-32');
            addClass(buttonWrapper, 'screen-812');
            break;
        case 846:
            addClass(buttonWrapper, 'screen-846');
            break;
    }
}

mobileOptionButtonPosition()

let timer;
// ******** Type to Adventure Dialog Box (Contains Typing Effect) ********
const typer = (text) => {
    let characters = text.split('');
    timer = setInterval(() => {
        if (characters.length > 0) {
            document.querySelector("#text").innerHTML += characters.shift();
        } else {
            clearInterval(timer);
        }
    }, 30);
}

const clearText = () => {
    let adventureText = document.querySelector('#text');
    adventureText.innerText = ''
}


let playerInput = document.querySelector('#player-input');
let playerEnter = document.querySelector('#player-enter');

let playerName = 'testin1g';

typer('Hey there...What is your name?')

function validate(e) {
    //Regrex (Regular Expression) for valid characters i.e. Alphabets, Numbers, and Space
    //This regex does NOT allow numbers.
    let regex = /^[A-Za-z]+$/
    //This regex allows for numbers.
    // let regex = /^[A-Za-z0-9 ]+$/
    let isValid = regex.test(e)
    return isValid === true ? 'true' : 'false'
}

const takePlayerInput = (string) => {

    if (/\d/.test(string)) {
        clearText();
        typer(text);
    }
    else {
        alert('You may only use letters in your name. Please enter a valid name.');
    }
}

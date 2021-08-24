
/* TODO: 
1. Change internal code for each function that uses addClasses to instead use this glocal version. "e" will be for the dom element (example: darkModeOrb would be "e". See "orbColor" for reference.)
2. This is not ready to use yet. Currently a work in progress.
*/

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
    const gameText = document.querySelector('.game-text');

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

// *****************************************
//WORK IN PROGRESS
//******************************************
// let text = 'Welcome adventurer. What is your name?'

// // Adds one letter at a time to the adventure dialog box.
// const textArray = text.split('');
// let loopTimer;

// const frameLooper = () => {
//     textArray.length > 0 ? document.querySelector('#text').innerHTML += textArray.shift() : clearTimeout(loopTimer);
//     loopTimer = setTimeout('frameLooper()', 30);
// }

// frameLooper()

// let dialog = (text) => {
//     let textArray = text.split('');
//     return textArray;
// }

// let loopTimer

// const frameLooper = (text) => {
//     let array = dialog(text)
//     array.length > 0 ? document.querySelector('#text').innerHTML += array.shift() : clearTimeout(loopTimer);
//     loopTimer = setTimeout('frameLooper()', 30);
// }

// frameLooper(dialog('test'))


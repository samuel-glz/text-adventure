
// TODO: Change internal code for each function that uses addClasses to instead use this glocal version. "e" will be for the dom element (example: darkModeOrb would be "e". See "orbColor" for reference.)
const addClasses = (e, ...styles) => {
    styles.forEach(element => e.classList.toggle(elememt))
}

const orbColor = () => {
    let darkModeOrb = document.querySelector('#dark-mode');

    let colorToggle = (...styles) => {
        styles.forEach(element => darkModeOrb.classList.toggle(element))
    }

    colorToggle('from-yellow-200', 'via-yellow-300', 'to-red-600', 'from-gray-400', 'via-gray-300', 'to-gray-400', 'text-purple-800', 'border-purple-400', 'border-gray-200');

    //bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
}

const optionColors = () => {
    let dmOptionsBox = document.querySelector('.dm-options');
    let button = document.querySelectorAll('button');

    let buttonColorToggle = (...styles) => {
        styles.forEach(element => dmOptionsBox.classList.toggle(element))
    }
    // options-container background color
    buttonColorToggle('bg-gray-700', 'bg-gray-900');

    // option-button border color
    button.forEach(element => {
        element.classList.toggle('border-gray-600')
    });
}

const bodyColor = () => {
    let dmTitle = document.querySelector('.dm-title');
    let body = document.querySelector('body');

    let titleTextColorToggle = (...styles) => {
        styles.forEach(element => dmTitle.classList.toggle(element))
    }
    // page title color
    titleTextColorToggle('text-gray-700', 'text-gray-200');

    let backgroundColorToggle = (...styles) => {
        styles.forEach(element => body.classList.toggle(element))
    }
    // webpage background color
    backgroundColorToggle('bg-gray-200', 'bg-gray-700')

}

const adventureBoxColor = () => {
    let dmAdventure = document.querySelector('.dm-adventure');

    let colorToggle = (...styles) => {
        styles.forEach(element => dmAdventure.classList.toggle(element))
    }
    // adventure text border color
    colorToggle('bg-gray-700', 'bg-gray-900', 'text-gray-400');
}

const darkModeListener = (event, action) => {
    let darkModeOrb = document.querySelector('#dark-mode');
    darkModeOrb.addEventListener(event, action);
}

const darkMode = () => {
    darkModeListener('click', orbColor);
    darkModeListener('click', bodyColor);
    darkModeListener('click', optionColors);
    darkModeListener('click', adventureBoxColor);
}

const screenSize = window.screen.height
const buttonWrapper = document.querySelector('.btn-wrapper')
const buttonOptions = document.querySelector('.dm-options')

const addClass = (e, newClass) => {
    e.classList.add(newClass)
}

switch (screenSize) {
    case 667:
        addClass(buttonWrapper, 'mt-0')
        break;
    case 736:
        addClass(buttonWrapper, 'mt-24')
        break;
    case 740:
        addClass(buttonWrapper, 'mt-32')
        console.log('Galaxy')
        break;
    case 812:
        console.log('iPhone X')
        break;
    default:
        console.log('--Options box margin not affected by switch statement--\n--Device size not being tracked in switch statement--')
}

console.log(screenSize)

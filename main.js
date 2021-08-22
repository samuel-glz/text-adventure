
const changeOrb = () => {
    let dmAdventure = document.querySelector('.dm-adventure');
    let dmOptionsBox = document.querySelector('.dm-options');
    let dmTitle = document.querySelector('.dm-title')
    let body = document.querySelector('body')
    let button = document.querySelectorAll('button')

    dmTitle.classList.toggle('text-gray-700')
    dmTitle.classList.toggle('text-gray-200')

    darkModeOrb.classList.toggle('bg-yellow-200')
    darkModeOrb.classList.toggle('bg-gray-700')

    dmAdventure.classList.toggle('bg-gray-600')
    dmAdventure.classList.toggle('bg-gray-200')

    dmOptionsBox.classList.toggle('bg-gray-600')
    dmOptionsBox.classList.toggle('bg-gray-200')

    body.classList.toggle('bg-gray-200')
    body.classList.toggle('bg-gray-700')

    button.forEach(element => {
        element.classList.toggle('border-gray-800')
    });
}
const darkModeOrb = document.querySelector('#dark-mode');
darkModeOrb.addEventListener('click', changeOrb)

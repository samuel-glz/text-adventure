// ************************************************************
// Alternate Version of typing text 1 letter at a time
// Cache the element
// const div = document.querySelector('#text');

// function frameLooper(str) {

//   // Split the string
//   const arr = str.split('');

//   // Create a small loop for the `setTimeout` to call
//   // Set the index to 0
//   function loop(i = 0) {

//     // If the index is less than the array length
//     // add a letter from the array
//     if (i < arr.length) div.textContent += arr[i];

//     // Otherwise increase the index, and run the loop again
//     setTimeout(loop, 100, ++i);

//   }

//   loop();

// }

// // Pass in the string
// frameLooper('This is a test');
// ************************************************************

// ************************************************************
// function validateInput(e) {
//     //Regrex (Regular Expression) for valid characters i.e. Alphabets, Numbers, and Space

//     //This regex does NOT allow numbers, symbols, or spaces.
//     let regex = /^[A-Za-z]+$/

//     //This regex allows for numbers.
//     // let regex = /^[A-Za-z0-9 ]+$/
    
//         This regex allows spaces and numbers
//         let regexTest = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/

//     let isValid = regex.test(e)
//     return isValid === true ? console.log(e) : alert('Only letters may be used for your name. Please enter a valid name.')
// }
// ************************************************************
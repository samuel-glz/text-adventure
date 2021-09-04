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
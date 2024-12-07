// function addingEventListener() {
//     const input = document.getElementById('button');
//     input.addEventListener('click', function() {
//         alert('I was clicked!');
//       });
//       function clickAlert() {
//         alert('I was clicked!');
//       }
//       const input = document.getElementById('button');
//       input.addEventListener('click', clickAlert);
//       function clickAlert() {
//         alert('Hee hee, that tickles!');
//       }
//       const input = document.getElementById('button');
//       input.addEventListener('click', clickAlert);
// }

function addingEventListener() {
    // Grab the button element
    const input = document.getElementById('button');
  
    // Define a named event listener function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Attach the event listener to the button
    input.addEventListener('click', clickAlert);
  
    // Optionally, if you want to change the message later, redefine the function
    function clickAlert() {
      alert('Hee hee, that tickles!');
    }
  
    // Re-attach the updated listener to ensure the latest definition is used
    input.removeEventListener('click', clickAlert); // Remove old listener if needed
    input.addEventListener('click', clickAlert);   // Add updated listener
  }
  

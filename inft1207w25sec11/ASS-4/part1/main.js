// Name: joe jacob
// Student Number: 100977645
// Date: april - 04- 2025
// Description: This java  document is designed to present a username 

// Get references to DOM elements
const customName = document.getElementById('customname'); // Input field for custom name
const randomize = document.querySelector('.randomize');   // Button to trigger story generation
const story = document.querySelector('.story');           // Story output container

// Helper function to select a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Template story text with placeholders
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays of possible values to randomly insert into the story
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Add click event listener to the randomize button
randomize.addEventListener('click', result);

// Function that runs when the button is clicked
function result() {
    // Start with the original story template
    let newStory = storyText;

    // Get random values from each array
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the story with selected values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // If the user entered a custom name, replace "Bob" with that name
    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name);
    }

    // If UK unit option is selected, convert weight and temperature
    if(document.getElementById('uk').checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone'; // Convert pounds to stone
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // Convert Fahrenheit to Celsius
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }
      
    // Display the final story in the page
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

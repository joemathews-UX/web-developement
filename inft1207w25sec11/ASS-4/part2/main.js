// Name: Joe Jacob
// Student Number: 100977645
// Date: April 04, 2025
// Description: This JavaScript document is designed to present an image gallery

// Select the main displayed image element
const displayedImage = document.querySelector('.displayed-img');

// Select the container where thumbnail images will be added
const thumbBar = document.querySelector('.thumb-bar');

// Select the toggle button and the overlay element used for dark/light effect
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file using an object */
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
};

/* Loop through each image in the array to create and append thumbnail images */
for (let i = 0; i < images.length; i++) {
    // Create a new <img> element
    const newImage = document.createElement('img');

    // Set the image source and alt text
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', alts[images[i]]);

    // Append the thumbnail image to the thumbBar
    thumbBar.appendChild(newImage);
    
    // Add click event listener to each thumbnail
    // When clicked, it updates the main displayed image and alt text
    newImage.addEventListener('click', () => {
      displayedImage.setAttribute('src', `images/${images[i]}`);
      displayedImage.setAttribute('alt', alts[images[i]]);
    });
}

/* Toggle button for darkening/lightening the displayed image */
btn.addEventListener('click', () => {
    // Check the current class of the button
    const currentClass = btn.getAttribute('class');

    // If it's dark, switch to light and apply semi-transparent dark overlay
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Dark overlay
    } else {
      // If it's light, switch back to dark and remove overlay
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // No overlay
    }
});

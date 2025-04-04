const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
  };

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', alts[images[i]]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', () => {
      displayedImage.setAttribute('src', `images/${images[i]}`);
      displayedImage.setAttribute('alt', alts[images[i]]);
    });
  }
  


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

class CustomTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ``;
  }
}

customElements.define("custom-tag", CustomTag);



/* // layout.js

// Create a document fragment
const fragment = document.createDocumentFragment();

// Define the images array
const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg'
];

// Create a slider element using template literals
const slider = document.createElement('div');
slider.className = 'slider';

// Create and append slide elements to the slider using template literals
const slides = images.map((img) => {
  return `<div class="slide">
    <img src="${img}" alt="">
  </div>`;
}).join('');

slider.innerHTML = slides;

// Append the slider to the document fragment
fragment.appendChild(slider);

// Export the fragment for later use
export default fragment; */

/* // main.js

// Import the fragment from layout.js
import fragment from './layout.js';

// Insert the document fragment into the DOM
document.getElementById('sliderContainer').appendChild(fragment); */





/*  // Create a document fragment
const fragment = document.createDocumentFragment();

// Define the images array
const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg'
];

// Create a slider element using template literals
const slider = document.createElement('div');
slider.className = 'slider';

// Create and append slide elements to the slider using template literals
const slides = images.map((img) => {
  return `<div class="slide">
    <img src="${img}" alt="">
  </div>`;
}).join('');

slider.innerHTML = slides;

// Append the slider to the document fragment
fragment.appendChild(slider);

// Insert the document fragment into the DOM
document.getElementById('sliderContainer').appendChild(fragment);*/
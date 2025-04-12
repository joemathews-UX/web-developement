/**
 * Name: Joe Jacob
 * Student Number: 100977645
 * Date: April 11, 2025
 * Description: This script handles the functionality for:
 * - Showing/hiding the comments section
 * - Adding new comments via a form
 * - Keyboard accessibility for the show/hide button
 */

// ==============================================
// COMMENTS SECTION TOGGLE FUNCTIONALITY
// ==============================================

// Get references to the show/hide button and comments wrapper
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initially hide the comments section
commentWrapper.style.display = 'none';

// Add click event handler to toggle comments visibility
showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  
  // Toggle between showing and hiding comments
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// ==============================================
// COMMENT FORM SUBMISSION FUNCTIONALITY
// ==============================================

// Get references to form elements
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Prevent default form submission and handle with custom function
form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

/**
 * Handles comment submission:
 * - Creates new list item for the comment
 * - Adds name and comment text
 * - Appends to comments list
 * - Clears form fields
 */
function submitComment() {
  // Create new comment elements
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  
  // Get values from form fields
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  // Set text content for paragraphs
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  // Append elements to DOM
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Clear form fields
  nameField.value = '';
  commentField.value = '';
}

// ==============================================
// KEYBOARD ACCESSIBILITY IMPROVEMENTS
// ==============================================

// Make show/hide button focusable for keyboard users
showHideBtn.tabIndex = 0;

// Allow triggering the button with Enter key
showHideBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    this.click(); // Simulate click when Enter is pressed
  }
});
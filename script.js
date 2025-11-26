// Select elements
const colorInput = document.getElementById('colorInput');
const textInput = document.getElementById('textInput');
const bgBtn = document.getElementById('bgBtn');
const textBtn = document.getElementById('textBtn');
const displayBox = document.getElementById('displayBox');

// Change background color on button click
bgBtn.addEventListener('click', function() {
  const color = colorInput.value.trim();
  displayBox.style.backgroundColor = ''; // Reset
  if (color) {
    // Test if color is valid by assigning and checking computed style
    displayBox.style.backgroundColor = color;
    let applied = window.getComputedStyle(displayBox).backgroundColor;
    if (applied === 'rgba(0, 0, 0, 0)' || applied === 'transparent') {
      alert('Invalid color name!');
      displayBox.style.backgroundColor = '#f0f0f0';
    }
  } else {
    alert('Invalid color name!');
    displayBox.style.backgroundColor = '#f0f0f0';
  }
});

// Update text content on button click
textBtn.addEventListener('click', function() {
  const text = textInput.value.trim();
  if (text.length > 0) {
    displayBox.textContent = text;
  } else {
    alert('Please enter some text!');
  }
});

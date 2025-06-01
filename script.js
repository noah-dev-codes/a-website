// Selecting the background element
const background = document.getElementById('background');

// Function to update the background color based on mouse position
document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth; // Get normalized x position
    const y = e.clientY / window.innerHeight; // Get normalized y position
    background.style.backgroundColor = `rgb(${Math.floor(x * 255)}, ${Math.floor(y * 255)}, 150)`; // Update background color
});
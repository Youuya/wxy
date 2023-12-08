document.getElementById('pink-heart').addEventListener('click', function() {
  document.getElementById('pink-message').style.display = 'block';
});

document.getElementById('blue-heart').addEventListener('click', function() {
  document.getElementById('blue-message').style.display = 'block';
});

document.getElementById('black-heart').addEventListener('click', function() {
  document.getElementById('black-message').style.display = 'block';
  
  // After all messages appear, fill the screen with hearts
  setTimeout(function() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 100; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart-image');
      heart.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.iazsuFmtm73sgdLVuVLMBwHaHa?rs=1&pid=ImgDetMain")'; // Replace with heart icon URL
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heartsContainer.appendChild(heart);
    }
  }, 3000); // Adjust the delay time as needed
});

const displayedImage = document.getElementById('fullImage');
const thumbBar = document.querySelector('.thumb-bar');

// image filenames + alt text
const images = [
  { src: 'img/photobooth.jpg', alt: 'Photo booth moment' },
  { src: 'img/out-to-nyc.jpg', alt: 'Out to NYC' },
  { src: 'img/anxiety-graphic.jpg', alt: 'Funny anxiety graphic' },
  { src: 'img/gingham-bedding.jpg', alt: 'Cute gingham bedding' },
  { src: 'img/whats-in-my-bag.jpg', alt: 'Bag contents' },
  { src: 'img/strawberry-heels.jpg', alt: 'Strawberry heels' }
];

// loop through images + create thumbnail elements
images.forEach(image => {
  const newImage = document.createElement('img');
  newImage.src = image.src;
  newImage.alt = image.alt;
  newImage.addEventListener('click', () => {
    displayedImage.src = image.src;
    displayedImage.alt = image.alt;
  });
  thumbBar.appendChild(newImage);
});

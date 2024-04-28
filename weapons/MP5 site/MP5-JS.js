let currentImageIndex = 0;
const images = document.querySelectorAll('.image-gallery img');

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

showImage(currentImageIndex);

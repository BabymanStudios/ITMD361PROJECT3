// JavaScript for Image Slider
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});

// Initialize the slider to show the first image
showImage(currentIndex);

// Google Maps Initialization
function initMap() {
  const hilo = { lat: 19.7297, lng: -155.0907 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: hilo,
    zoom: 12,
  });
  new google.maps.Marker({
    position: hilo,
    map: map,
    title: 'Hilo, Hawaii',
  });
}

// JavaScript for Image Slider
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

// Initialize the first image as visible
images[currentIndex].classList.add('active');

// Show the image based on the current index
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
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

// Google Maps Initialization
function initMap() {
  const hilo = { lat: 19.7297, lng: -155.0907 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: hilo,
    zoom: 12,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] }
    ]
  });
  new google.maps.Marker({
    position: hilo,
    map: map,
    title: 'Hilo, Hawaii',
  });
}

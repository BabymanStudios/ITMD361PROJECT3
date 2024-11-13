let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

images[currentIndex].classList.add('active');

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

function initMap() {
  const hilo = { lat: 19.7297, lng: -155.0907 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: hilo,
    zoom: 12,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#515A47" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#D7BE82" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#7A4419" }] }
    ]
  });
  new google.maps.marker.AdvancedMarkerElement({
    position: hilo,
    map: map,
    title: 'Hilo, Hawaii',
  });
}

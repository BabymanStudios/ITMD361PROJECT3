function initMap() {
    const hilo = { lat: 19.7297, lng: -155.0907 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: hilo,
      zoom: 10,
      zoomControl: true,
      mapTypeId: 'satellite'
    });

    const marker = new google.maps.Marker({
      position: hilo,
      map: map,
      title: "Hilo, Hawaii"
    });

    const styledMapType = new google.maps.StyledMapType([
      {
        elementType: 'geometry',
        stylers: [{ color: '#ebe3cd' }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#523735' }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#f5f1e6' }]
      }
    ]);
  
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
  }

  let currentSlide = 0;
  const images = [
    "visualfiles/deadbolt.jpg",
    "visualfiles/castlevaniachainswing.png",
    "visualfiles/beardievssoldiers.jpg"
  ];
  const slideInterval = 3000;
  
  function showSlide(index) {
    const slider = document.getElementById("imageSlider");
    if (slider) {
      slider.src = images[index];
    }
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
  }
  
  function startSlider() {
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    startSlider();
    document.getElementById("nextButton").addEventListener("click", nextSlide);
    document.getElementById("prevButton").addEventListener("click", prevSlide);
  });
  
function initMap() {
  const hilo = { lat: 19.7297, lng: -155.0900 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: hilo,
    mapTypeControl: true,
    streetViewControl: true,
  });

  const marker = new google.maps.Marker({
    position: hilo,
    map: map,
    title: "Hilo, Hawaii",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Welcome to Hilo!</h3><p>Hilo is known as the birthplace of the loco moco dish.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
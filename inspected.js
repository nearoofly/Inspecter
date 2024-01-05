function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("La géolocalisation n'est pas supportée par ce navigateur.");
  }
}

function showPosition(position) {
  const output = {
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude
  };
  console.log(output);
}

// Appel de la fonction pour obtenir la localisation
getLocation();
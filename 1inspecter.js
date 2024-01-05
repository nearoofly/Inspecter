function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
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

function errorHandler(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("L'utilisateur a refusé la demande de géolocalisation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Les informations de géolocalisation ne sont pas disponibles.");
      break;
    case error.TIMEOUT:
      console.log("La demande de géolocalisation a expiré.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("Une erreur inconnue s'est produite.");
      break;
  }
}

// Appel de la fonction pour obtenir la localisation
getLocation();

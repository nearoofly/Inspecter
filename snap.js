function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
  } else {
    console.log("La géolocalisation n'est pas supportée par ce navigateur.");
  }
}

function showPosition(position) {
  if (position && position.coords) {
    const output = {
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude
    };
    console.log(output);
  } else {
    console.log("Les coordonnées ne sont pas disponibles pour le moment.");
    // Vous pouvez ajouter ici un appel de fonction ou une action alternative.
  }
}

function errorHandler(error) {
  console.log("Erreur de géolocalisation:", error);
}

// Appel de la fonction pour obtenir la localisation
getLocation();

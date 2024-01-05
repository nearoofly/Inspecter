fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const approximateLocation = {
      City: data.city,
      Region: data.region,
      Country: data.country_name
    };
    console.log(approximateLocation);
  })
  .catch(error => console.log("Erreur lors de la récupération des données de localisation:", error));

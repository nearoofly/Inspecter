fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const userIP = data.ip;
    fetch(`https://ipapi.co/${userIP}/json/`)
      .then(response => response.json())
      .then(userData => {
        const approximateLocation = {
          City: userData.city,
          Region: userData.region,
          Country: userData.country_name
        };
        console.log(approximateLocation);
      })
      .catch(error => console.log("Erreur lors de la récupération des données de localisation:", error));
  })
  .catch(error => console.log("Erreur lors de la récupération de l'adresse IP:", error));

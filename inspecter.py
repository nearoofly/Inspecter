from flask import Flask, render_template, request
import geocoder

app = Flask(__name__)

@app.route('/')
def index():
    
    client_ip = request.remote_addr

    
    location_info = geocoder.ip(client_ip)

    
    print("Informations de localisation du client:")
    print(f"Adresse IP: {client_ip}")
    print(f"Latitude: {location_info.latlng[0]}")
    print(f"Longitude: {location_info.latlng[1]}")

    return render_template('index.html', location_info=location_info)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)

import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "50%",
      height: "400px",
      marginTop: "200px"
    };

    // Specify the latitude and longitude of your desired location
    const defaultCenter = {
      lat: 37.7749, // Example latitude
      lng: -122.4194, // Example longitude
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Set your Google Maps API key
})(MapContainer);

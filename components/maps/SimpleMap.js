import React from "react";
import GoogleMapReact from "google-map-react";

const MyMarker = ({ text }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://goo.gl/maps/3gBHx7JJgcwB1zd26"
  >
    <h1 className="whitespace-nowrap text-black">Κτίριο «Φώτης Καφάτος» </h1>
    <h1 className="hover:text-blue-400 text-red-500 text-sm	 whitespace-nowrap">
      {text}
    </h1>
  </a>
);

function SimpleMap() {
  const center = { lat: 40.863969, lng: 25.804342 };
  const zoom = 15;
  const defaultOptions = { scrollwheel: false };
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div className="w-full h-96">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${api_key}`,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        defaultOptions={defaultOptions}
      >
        <MyMarker
          lat={center.lat}
          lng={center.lng}
          text="Πατήστε για οδηγίες "
        />
        {/* <FaMapMarkerAlt /> */}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;

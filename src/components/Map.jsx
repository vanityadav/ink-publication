import React, { useEffect, useState } from "react";
import { dark, light } from "./mapStyles";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map({ theme }) {
  const [mapTheme, setMapTheme] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAA5E7jQM_5qUElwTiq9tJApnfMK7jylJ4",
  });

  useEffect(() => {
    setMapTheme(theme === "dark" ? dark : light);
  }, [theme]);

  if (!isLoaded) return <div>Loading ... </div>;
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 28.4595, lng: 77.0266 }}
        mapContainerClassName="map-container"
        options={{
          gestureHandling: "greedy",
          disableDefaultUI: true,
          styles: mapTheme,
        }}
      >
        <MarkerF position={{ lat: 28.4595, lng: 77.0266 }} />
      </GoogleMap>
    </>
  );
}

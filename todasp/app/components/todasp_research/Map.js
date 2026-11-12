"use client";

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      setOptions({ key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
        version: "quarterly",
      });

      const { Map } = await importLibrary("maps");

      const location = {
        lat: 40.73061,
        lng: -73.935242,
      };

      const options = {
        center: location,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      };

      if (mapRef.current) {
        new Map(mapRef.current, options);
      }
    };

    initMap();
  }, []);

  return(
    <>
        <div ref={mapRef} className="w-full h-screen" />;
    </>
  ) 
};

export default Map;
"use client";

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      setOptions({
        key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
        v: "quarterly",
      });

      const { Map } = await importLibrary("maps");
      const { AdvancedMarkerElement } = await importLibrary("marker");
      const { PlaceAutocompleteElement } = await importLibrary("places");

      const defaultLocation = {
        lat: -23.5505,
        lng: -46.6333,
      };

      const options = {
        center: defaultLocation,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      };

      if (mapRef.current && inputRef.current) {
        const map = new Map(mapRef.current, options);

        const marker = new AdvancedMarkerElement({
          position: defaultLocation,
          map: map,
          title: "Localização",
        });

        const placeAutocomplete = new PlaceAutocompleteElement();

        inputRef.current.innerHTML = "";
        inputRef.current.appendChild(placeAutocomplete);

        placeAutocomplete.addEventListener("gmp-select", async ({ placePrediction }) => {
          const place = placePrediction.toPlace();
          await place.fetchFields({
            fields: ["displayName", "formattedAddress", "location"],
          });

          if (!place.location) return;

          map.setCenter(place.location);
          map.setZoom(17);
          marker.position = place.location;
          marker.title = place.displayName || place.formattedAddress || "";
        });
      }
    };

    initMap();
  }, []);

  return (
    <section id="map" className="grid grid-cols-1 gap-2 min-h-dvh justify-center m-10">
      <h1 className="text-3xl place-content-center font-bold text-center text-slate-900">Procure o endereço que deseja analisar!</h1>
      <div className="flex flex-col gap-4">
        <div ref={inputRef} className="w-full" />
        <div ref={mapRef} className="w-full h-100 rounded-lg overflow-hidden" />
      </div>
    </section>
  );
};

export default Map;
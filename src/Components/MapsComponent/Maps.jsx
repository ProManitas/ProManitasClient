// import React, { useRef } from 'react'; // Agrega useRef a las importaciones
// import { useDispatch, useSelector } from 'react-redux';
// import { setCoordinates, setZoom, setMapType } from '../../Redux/Actions/mapAction';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// const { REACT_APP_API_KEY} = process.env

// const Maps = () => {
//   // Obtén el estado del mapa y las acciones desde el store de Redux
//   const { coordinates, zoom, mapType } = useSelector(state => state.map) || {};
//   const dispatch = useDispatch();

//   // Valores predeterminados del mapa en caso de no recibir info del backend
//   const defaultCenter = { lat: 0, lng: 0 };
//   const defaultZoom = 50;
//   const defaultMapTypeId = 'roadmap';

//   // Ref para obtener una referencia al componente del mapa
//   const mapRef = useRef(null);

//   // Configuración de la carga asincrónica de la API de Google Maps
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: 'AIzaSyDKue8Ljcd2WYwUOObipgiGpM2KoLmyXa4', // Reemplaza con tu propia API key de Google Maps
//     libraries: ['places'], // Agrega cualquier otra biblioteca de Google Maps que necesites
//   });

//   // Función para manejar el evento de carga del mapa
//   const handleMapLoad = (map) => {
//     // Asigna la referencia del mapa al ref del componente
//     mapRef.current = map;
//   };

//   // Tu lógica para el mapa aquí
//   // Puedes usar mapRef.current para acceder a la instancia del mapa y ejecutar métodos de la API de Google Maps

//   // Ejemplo de cómo usar las acciones y dispatch para actualizar el estado del mapa
//   // ...

//   return (
//     // Renderiza el componente del mapa cuando la API de Google Maps esté cargada
//     isLoaded && (
//       <GoogleMap
//         // Propiedades del mapa
//         center={coordinates?.length > 0 ? coordinates : defaultCenter}
//         zoom={zoom || defaultZoom}
//         mapTypeId={mapType || defaultMapTypeId}
//         onLoad={handleMapLoad} // Manejador del evento de carga del mapa
//       >
//         {/* Marcadores del mapa */}
//         {coordinates?.map((coord, index) => {
//           return (
//             <Marker
//               key={index}
//               position={coord}
//             />
//           );
//         })}
//       </GoogleMap>
//     )
//   );
// };

// export default Maps;

import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";


const Maps = ({ address }) => {
  // Coordenadas por defecto en caso de que no haya datos disponibles
  const defaultCoordinates = {
    lat: -43.0791069,
    lng: -43.0791069,
  };

  // Verificar si hay coordenadas disponibles, de lo contrario, usar las coordenadas por defecto
  const coordinates = address ? address : defaultCoordinates;

  // Cargar el API de Google Maps
  const { isLoaded } = useJsApiLoader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  // Renderizar el mapa una vez que el API de Google Maps esté cargado
  return isLoaded ? (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMap center={coordinates} zoom={10}>
        {/* Marcador o cualquier otro componente que quieras mostrar en el mapa */}
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  ) : null;
};

export default Maps;

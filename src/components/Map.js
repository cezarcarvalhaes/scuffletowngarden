import React, { useEffect } from 'react';
import MapStyle from './subcomponents/MapStyle';

const MAPS_API_KEY = process.env.GATSBY_MAPS_API_KEY

const Map = (props) => {
   const onScriptLoad = () => {
      const map = new window.google.maps.Map(
         document.getElementById('map'),
         {
            center: { lat: 37.555680, lng: -77.466430 },
            zoom: 14,
            styles: MapStyle,
         }
      );
      props.onMapLoad(map);
   }

   useEffect(() => {
      if (!window.google) {
         var s = document.createElement('script');
         s.type = 'text/javascript';
         s.src = `https://maps.google.com/maps/api/js?key=${MAPS_API_KEY}`;
         var x = document.getElementsByTagName('script')[0];
         x.parentNode.insertBefore(s, x);
         // Below is important. 
         //We cannot access google.maps until it's finished loading
         s.addEventListener('load', (event) => {
           onScriptLoad();
         })
       } else {
         onScriptLoad();
       }
   });

   return (
      <div id="map" className="w-100"></div>
   );
};

export default Map;

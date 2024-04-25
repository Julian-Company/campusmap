
import React from 'react'
import "./Map.css"
import "leaflet/dist/leaflet.css"
import {MapContainer, TileLayer ,Marker, Rectangle} from "react-leaflet"


function Map() {

    const rectangleBounds = [[41.58806155166177, -87.47570566425969], [41.57759858107239, -87.47116584520404]];

    return (
      <div className="map">
          <MapContainer center = {[41.58345344849841, -87.4735208017499]} zoom = {16.3}>
          <TileLayer
            url = "https://tile.openstreetmap.de/{z}/{x}/{y}.png"
              
              />
            <Rectangle bounds = {rectangleBounds} color = "purple" weight = {3}/>
          </MapContainer>
        
        Map will be here
      </div>
    );
  }
  
  export default Map;
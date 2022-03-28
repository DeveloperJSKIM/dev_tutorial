import React, {useEffect, useRef, useState} from "react";
import {MapContainer, TileLayer,FeatureGroup,Popup,Circle} from "react-leaflet";
import L from "leaflet";
import '../App.css'
const Test3 =()=>{
    let map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
    L.tileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1", {
        attribution: "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
    }).addTo(map);
        // FeatureGroup is to store editable layers
        let drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        let drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);
    return(
        <div className={"container"} id={map}>

        </div>
    );
}

export default Test3;

import React, { useState } from "react";
import '../App.css'
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const Test2 = () => {
    const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
    const [mapLayers, setMapLayers] = useState([]);

    const ZOOM_LEVEL = 12;
    const mapRef = useRef();

    const _onCreate = (e) => {
        console.log(e);

        const { layerType, layer } = e;
        if (layerType === "polygon") {
            const { _leaflet_id } = layer;

            setMapLayers((layers) => [
                ...layers,
                { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
            ]);
        }
    };

    const _onEdited = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => {
            setMapLayers((layers) =>
                layers.map((l) =>
                    l.id === _leaflet_id
                        ? { ...l, latlngs: { ...editing.latlngs[0] } }
                        : l
                )
            );
        });
    };

    const _onDeleted = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };

    return (
        <>

            <div className={"container"}>
                <div>
                    <h2>React-leaflet - Create, edit and delete polygon on map</h2>

                    <div>
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} className={"map"}>
                            <FeatureGroup>
                                <EditControl
                                    position="topright"
                                    onCreated={_onCreate}
                                    onEdited={_onEdited}
                                    onDeleted={_onDeleted}
                                    draw={{
                                        rectangle: false,
                                        polyline: false,
                                        circle: false,
                                        circlemarker: false,
                                        marker: false,
                                    }}
                                />
                            </FeatureGroup>

                            <TileLayer
                                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
                            />
                        </MapContainer>

                        <pre>{JSON.stringify(mapLayers, 0, 2)}</pre>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test2;

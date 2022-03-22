import React, {useEffect, useMemo, useRef, useState} from "react";
import {MapContainer, Marker, TileLayer, Polygon,Popup,CircleMarker} from "react-leaflet";
import L from "leaflet";
import '../App.css'
const Test1 =()=>{
    const [coords, setCoords] = useState({lat:0,lng:0});
    const [map,setMap]=useState(null);
    const [drawPolygon,setDrawPolygon]=useState(false)
    const circle = [
        {name:'악어',coordinates:[33.534527,126.136780],quan:3234},
        {name:'고래',coordinates:[33.557418,126.460876],quan:12234},
        {name:'잉어',coordinates:[33.7209,126.2068],quan:5267},
    ];

    const markerRef=useRef();

    useEffect(()=>{
        if(!map) return;
        map.addEventListener("mousemove",(e)=>{
            setCoords({lat:e.latlng.lat,lng:e.latlng.lng});
        });
    },[map])
    const eventHandlers=useMemo(()=>({
        mouseover(){
            console.log("on")
            if (markerRef) markerRef.current.openPopup();
        },
        mouseout(){
            console.log("off")
            if (markerRef) markerRef.current.closePopup();
        }
    }),[])

    const [polygon,setPolygon]=useState([]);


    useEffect(()=>{
        if(!map) return;
        map.addEventListener("mousemove",(e)=>{
            setCoords({lat:e.latlng.lat,lng:e.latlng.lng});
        });
        if(drawPolygon===true){
            isDrawPolygon()
        }
    },[map,polygon,drawPolygon])


    const pLineGroup = useRef(null);
    const pMarkerGroup = useRef(null);

    useEffect(()=>{
        pLineGroup.current=L.layerGroup();
    },[pLineGroup])

    const isDrawPolygon =()=>{
        map.addEventListener("click",(e)=>{
            //alert(`위도:${e.latlng.lat}경도:${e.latlng.lng}`);
            if(polygon===[]){
                setPolygon([e.latlng.lat,e.latlng.lng])
            }
            else{
                isPolygonAdd(e);
            }
        })
    }
    const isMarkerAdd=(e)=>{
        pMarkerGroup.current.addMarker()
    }
    const isPolygonAdd=(e)=>{
        //pLineGroup.current.clearLayers()
        deleteAllLayers()
        let newItem = [e.latlng.lat,e.latlng.lng]
        let newArr = polygon
        newArr.push(newItem)
        setPolygon(newArr)
        //console.log(polygon)
        //L.polygon(polygon).addTo(map)
        pLineGroup.current.addLayer(L.polygon(polygon, {color: 'red'})).addTo(map)
        console.log(pLineGroup.current._layers)
    }
    const deleteAllLayers=()=>{
        for (const i in map._layers) {
            if (map._layers[i].options.color === "red") {
                try {
                    map.removeLayer(map._layers[i]);
                    //pLineGroup.current.clearLayers(map);
                } catch (e) {
                    console.log("problem with " + e + map._layers[i]);
                }
            }
        }
        //setPolygon([]);
        //map.removeLayer(pLineGroup.current);
        console.log(map._layers)
        // window.location.reload()
    }

    return(
        <div className={"container"}>
            <MapContainer
                className={"map"}
                center={[33.4624,126.54039]}
                zoom={10}
                maxZoom={20}
                whenCreated={setMap}
            >
                <TileLayer url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}/>
                <Marker position={[33.449777,126.584476]} eventHandlers={eventHandlers} ref={markerRef}>
                    <Popup>Hello</Popup>
                </Marker>
                <Polygon color={'blue'} positions={polygon}/>
                {
                    circle.map((item)=>(
                        <CircleMarker
                            key={item.name}
                            center={[item.coordinates[0],item.coordinates[1]]}
                            radius={20*Math.log(item.quan/1000)}
                            fillOpacity={0.5}
                            stroke={false}
                        >
                            <Popup>
                                <p>{`어종: ${item.name}`}</p>
                                <p>{`포획량: ${item.quan}`}</p>
                            </Popup>
                        </CircleMarker>
                    ))
                }
            </MapContainer>
            <div>
                <b>lat:{coords.lat.toFixed(4)}</b>
                <b>lng:{coords.lng.toFixed(4)}</b>
            </div>
            <button onClick={()=>{
                window.location.reload()
            }}>Reset</button>
            <button onClick={()=>{
                setDrawPolygon(true)
            }}>DrawPolygon</button>
        </div>
    );
}

export default Test1;

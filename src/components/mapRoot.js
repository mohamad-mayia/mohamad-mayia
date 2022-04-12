import React, { useState } from "react";
import L from 'leaflet'
import {
    MapContainer, TileLayer, Marker, Popup, FeatureGroup, Circle
} from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import randomLocation from 'random-location'
import providers from "../providers";
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
const { greatCircleDistance } = require("great-circle-distance");

const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker-icon.png'),
    iconSize: [20, 30]

})
const mailIcon = new L.Icon({
    iconUrl: require('../assets/mail.png'),
    iconSize: [15, 15]

})
const MapRoot = () => {
    let [customRadius, setCustomRadius] = useState(1000)
    let [numberOfBoxes, setNumberOfBoxes] = useState(Math.floor(Math.random() * (161)) + 90)
    let [result, setResult] = useState()
    let [boxesArray, setBoxesArray] = useState([])
    let [circlesArray, setCirclesArray] = useState([])
    const center = [33.312805, 44.361488]
    const zoomLevel = 11

    React.useEffect(() => { getRandomPoints(numberOfBoxes) }, [numberOfBoxes])

    const getRandomPoints = (numberOfBoxes) => {
        let temp = []
        for (let i = 0; i < numberOfBoxes; i++) {

            temp.push(randomLocation.randomCirclePoint({
                latitude: center[0],
                longitude: center[1]
            }, 12000))
        }
        setBoxesArray(temp)
    }


    const _onCreate = (e) => { setCirclesArray(e.layer._latlngs) }

    const calculate = () => {
        let tempArr = []
        circlesArray.forEach(circle => {
            boxesArray.forEach((box, index) => {
                if (greatCircleDistance({ lat1: circle.lat, lng1: circle.lng, lat2: box.latitude, lng2: box.longitude }) * 1000 <= customRadius) {
                    tempArr.push({ ...box, id: index })
                }
            })
        })

        setResult([...new Set(tempArr.map(item => item.id))].length)
    }

    const _onDeleted = () => { setResult(''); setCirclesArray([]) }
    return (

        <div className='mapParent'>
            <div className="controlres">
                <label>Radius (m):</label>
                <input type={'number'} min='1' value={customRadius} onChange={(e) => { setCustomRadius(e.target.value) }} ></input>

                {circlesArray.length > 0 && <button onClick={() => calculate()}>Calculate</button>}
                {result ? <div className="result">   result = {result} </div> : null}
            </div>
            <MapContainer center={center} zoom={zoomLevel}

            >
                <FeatureGroup >

                    <EditControl
                        position='topright'

                        onCreated={_onCreate}
                        onDeleted={_onDeleted}
                        draw={{ rectangle: false, polygon: false, marker: false, circle: false, circlemarker: false }}
                    />

                    {circlesArray.map((item, index) => {
                        return (
                            <Circle key={index + item.lat + item.lng} center={[item.lat, item.lng]} radius={customRadius} />
                        )
                    })}

                </FeatureGroup>

                <TileLayer url={providers.maptiler.url} attribution={providers.maptiler.attribution} />

                <Marker position={center} icon={markerIcon}>
                    <Popup>Baghdad City</Popup>
                </Marker>

                {boxesArray.map((box, index) => (
                    <Marker key={index} position={[box.latitude, box.longitude]} icon={mailIcon}>
                        <Popup>Mail Box ({index + 1})</Popup>
                    </Marker>
                ))}


            </MapContainer>
        </div >

    )
}
export default MapRoot
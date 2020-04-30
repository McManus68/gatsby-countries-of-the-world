import React from "react"

import { Map, TileLayer, Marker, Popup } from "react-leaflet"

import style from "./map-country.module.scss"

const MapCountry = ({ coordinates }) => {
  return (
    <Map center={coordinates} zoom={5} className={style.mapCountry}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </Map>
  )
}

export default MapCountry

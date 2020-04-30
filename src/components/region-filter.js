import React from "react"
import PropTypes from "prop-types"

import style from "./region-filter.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RegionFilter = ({ regions, callback, selected }) => {
  return (
    <div className={style.regionFilter}>
      <FontAwesomeIcon icon="globe-americas" size="6x" />
      <ul>
        {regions.map((region, index) => {
          return (
            <li
              className={selected === region ? style.selected : ""}
              key={index}
              onClick={() => callback(region)}
            >
              {region}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

RegionFilter.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default RegionFilter

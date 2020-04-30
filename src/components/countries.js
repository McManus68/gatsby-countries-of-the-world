import React from "react"
import PropTypes from "prop-types"

import style from "./countries.module.scss"

import CountryPreview from "./country-preview"

const Countries = ({ countries }) => {
  return (
    <div className={style.countries}>
      {countries.map((country, index) => {
        return <CountryPreview country={country} key={index} />
      })}
    </div>
  )
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
}

export default Countries

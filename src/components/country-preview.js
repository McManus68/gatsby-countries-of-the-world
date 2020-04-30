import React from "react"
import PropTypes from "prop-types"

import style from "./country-preview.module.scss"

import { navigate } from "gatsby"

const CountryPreview = ({ country }) => {
  return (
    <div
      className={style.countryPreview}
      onClick={() => navigate("/country/" + country.alpha3Code)}
    >
      <div className={style.header}>
        <div className={style.nameContainer}>
          <span className={style.name}>{country.name}</span>
          <span className={style.nativeName}>({country.nativeName})</span>
        </div>

        {/*<img src={country.flag} />*/}
      </div>
      <table>
        <tbody>
          <tr>
            <th>ISO 3166-1 alpha-2</th> <td>{country.alpha2Code}</td>{" "}
          </tr>
          <tr>
            <th>ISO 3166-1 alpha-3</th>
            <td>{country.alpha3Code}</td>
          </tr>
          <tr>
            <th>Capital</th> <td>{country.capital}</td>
          </tr>
          <tr>
            <th>Currency</th>
            <td>
              {(country.currencies[0].code || "-") +
                " (" +
                (country.currencies[0].symbol || "-") +
                ")"}
            </td>
          </tr>
          <tr>
            <th>Population</th> <td>{country.population}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{country.area} (km2)</td>
          </tr>
          <tr>
            <th>Region</th> <td>{country.region}</td>
          </tr>
          <tr>
            <th>Int. Dial Code</th> <td>{country.callingCodes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

CountryPreview.propTypes = {
  country: PropTypes.object.isRequired,
}

export default CountryPreview

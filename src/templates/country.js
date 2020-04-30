import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import style from "./country.module.scss"

import MapCountry from "../components/map-country"

import SEO from "../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { navigate } from "gatsby"

export default ({ data }) => {
  let country = data.country

  return (
    <Layout>
      <SEO title={"Details about " + country.name} />
      <div className={style.countryWrapper}>
        <div className="wrapper">
          <img src={country.flag} alt={country.name}></img>
        </div>
      </div>

      <div className={style.country + " wrapper"}>
        <div className={style.countryName}>
          <FontAwesomeIcon
            icon="arrow-alt-circle-left"
            size="4x"
            onClick={() => navigate("/")}
          />
          <h1>{country.name}</h1>
        </div>

        <div className={style.infos}>
          <div className={style.blocNames}>
            <h2>Names</h2>
            <table>
              <tbody>
                <tr>
                  <th>Common</th>
                  <td>{country.name}</td>
                </tr>
                <tr>
                  <th>Native Name</th>
                  <td>{country.nativeName}</td>
                </tr>
                <tr>
                  <th>Alternative spellings</th>
                  <td>{country.altSpellings.join(", ")}</td>
                </tr>
                <tr>
                  <th colSpan="2">Translations</th>
                </tr>
                {Object.entries(country.translations).map(([key, value]) => {
                  return (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className={style.blocCodes}>
            <h2>Codes</h2>
            <table>
              <tbody>
                <tr>
                  <th>ISO 3166-1 alpha-2</th>
                  <td>{country.alpha2Code}</td>
                </tr>
                <tr>
                  <th>ISO 3166-1 alpha-3</th>
                  <td>{country.alpha3Code}</td>
                </tr>
                <tr>
                  <th>ISO 3166-1 numeric</th>
                  <td>{country.numericCode}</td>
                </tr>
                <tr>
                  <th>International calling code</th>
                  <td>{country.callingCodes}</td>
                </tr>
                <tr>
                  <th>Currency code</th>
                  <td>
                    {(country.currencies[0].code || "-") +
                      " (" +
                      (country.currencies[0].symbol || "-") +
                      ")"}
                  </td>
                </tr>
                <tr>
                  <th>Top level domain</th>
                  <td>{country.topLevelDomain}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.blocLanguage}>
            <h2>Language</h2>
            <table>
              <tbody>
                <tr>
                  <th>Native language</th>
                  <td>{country.name}</td>
                </tr>
                <tr>
                  <th colSpan="2">Languages</th>
                </tr>
                {country.languages.map((lang, index) => {
                  return (
                    <tr key={index}>
                      <th>{lang.iso639_2}</th>
                      <td>{lang.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className={style.blocGeography}>
            <h2>Geography</h2>
            <table>
              <tbody>
                <tr>
                  <th>Region</th>
                  <td>{country.region}</td>
                </tr>
                <tr>
                  <th>Subregion</th>
                  <td>{country.subregion}</td>
                </tr>
                <tr>
                  <th>Capital</th>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <th>Demonym</th>
                  <td>{country.demonym}</td>
                </tr>
                <tr>
                  <th>Lat/Lng</th>
                  <td>
                    <a
                      className={style.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.openstreetmap.org/#map=5/" +
                        country.latlng[0] +
                        "/" +
                        country.latlng[1]
                      }
                    >
                      {country.latlng.join(",")}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>{country.area} (km2)</td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>
                    {country.population}
                    <FontAwesomeIcon icon="male" />
                  </td>
                </tr>
                <tr>
                  <th>Land borders</th>
                  <td>
                    {country.borders.map((country, index) => {
                      return (
                        <Link
                          className={style.link}
                          key={index}
                          to={`/country/${country}`}
                        >
                          {country}
                        </Link>
                      )
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.blocMap}>
            <h2>Map</h2>
            <MapCountry coordinates={country.latlng} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    country: countriesJson(fields: { slug: { eq: $slug } }) {
      id
      population
      name
      alpha2Code
      alpha3Code
      altSpellings
      area
      borders
      callingCodes
      capital
      cioc
      currencies {
        symbol
        code
        name
      }
      demonym
      flag
      gini
      languages {
        nativeName
        name
        iso639_2
        iso639_1
      }
      latlng
      nativeName
      numericCode
      region
      subregion
      timezones
      topLevelDomain
      translations {
        br
        pt
        nl
        ja
        it
        hr
        fr
        fa
        es
        de
      }
    }
  }
`

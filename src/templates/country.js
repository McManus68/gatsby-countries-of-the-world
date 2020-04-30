import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import style from "./country.module.scss"

import { Link } from "gatsby"

export default ({ data }) => {
  let country = data.country

  return (
    <Layout>
      <div className={style.country}>
        <img src={country.flag}></img>
        <h1>{country.name}</h1>

        <div className={style.infos}>
          <div className={style.bloc}>
            <h2>Names</h2>
            <table>
              <tbody>
                <tr>
                  <th>Common</th> <td>{country.name}</td>
                </tr>
                <tr>
                  <th>Native Name</th> <td>{country.nativeName}</td>
                </tr>
                <tr>
                  <th>Alternative spellings</th>
                  <td>{country.altSpellings.join(", ")}</td>
                </tr>
                <tr>
                  <th colspan="2">Translations</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.bloc}>
            <h2>Codes</h2>
            <table>
              <tbody>
                <tr>
                  <th>ISO 3166-1 alpha-2</th> <td>{country.alpha2Code}</td>
                </tr>
                <tr>
                  <th>ISO 3166-1 alpha-3</th> <td>{country.alpha3Code}</td>
                </tr>
                <tr>
                  <th>ISO 3166-1 numeric</th> <td>{country.numericCode}</td>
                </tr>
                <tr>
                  <th>International calling code</th>
                  <td>{country.callingCodes}</td>
                </tr>
                <tr>
                  <th>Currency code</th>{" "}
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

          <div className={style.bloc}>
            <h2>Language</h2>
            <table>
              <tbody>
                <tr>
                  <th>Native language </th> <td>{country.name}</td>
                </tr>
                <tr>
                  <th colspan="2">Languages</th>
                </tr>
                {country.languages.map((lang, index) => {
                  return (
                    <tr>
                      <th>{lang.iso639_2}</th>
                      <td>{lang.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className={style.bloc}>
            <h2>Geography</h2>
            <table>
              <tbody>
                <tr>
                  <th>Region</th> <td>{country.region}</td>
                </tr>
                <tr>
                  <th>Subregion</th> <td>{country.subregion}</td>
                </tr>
                <tr>
                  <th>Capital</th> <td>{country.capital}</td>
                </tr>
                <tr>
                  <th>Demonym</th> <td>{country.demonym}</td>
                </tr>
                <tr>
                  <th>Lat/Lng</th> <td>{country.latlng}</td>
                </tr>
                <tr>
                  <th>Area</th> <td>{country.area} (km2)</td>
                </tr>
                <tr>
                  <th>Population</th> <td>{country.population}</td>
                </tr>
                <tr>
                  <th>Land borders</th>{" "}
                  <td>
                    {country.borders.map((country, index) => {
                      return (
                        <Link className={style.link} to={`/country/${country}`}>
                          {country}
                        </Link>
                      )
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
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

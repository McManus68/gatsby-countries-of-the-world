import React, { useState } from "react"
import { graphql } from "gatsby"

import "../styles/main.scss"
import style from "./index.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Countries from "../components/countries"
import SearchBar from "../components/search-bar"
import RegionFilter from "../components/region-filter"
import HeroParticles from "../components/hero-particles"

const IndexPage = ({ data }) => {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("All")

  let countries = data.countries.nodes
    .filter(c => c.name.toUpperCase().includes(search, 0))
    .filter(c => region === "All" || c.region === region)

  let regions = [
    ...new Set(data.countries.nodes.map(country => country.region)),
  ].filter(region => region !== "")
  regions.unshift("All")

  const handleSearch = e => {
    setSearch(e.target.value.toUpperCase())
  }

  const handleSetRegion = newRegion => {
    setRegion(newRegion)
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className={style.heroWrapper}>
        <div className={style.hero + " wrapper"}>
          <SearchBar callback={handleSearch} />
          <RegionFilter
            callback={handleSetRegion}
            regions={regions}
            selected={region}
          />
        </div>
        <HeroParticles />
      </div>

      <div className={style.main + " wrapper"}>
        <div className={style.results}>
          <span>
            <span className={style.count}>{countries.length}</span>
            countries displayed !
          </span>
        </div>

        <Countries countries={countries} />
      </div>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query contentfulQuery {
    countries: allCountriesJson {
      nodes {
        population
        name
        alpha2Code
        alpha3Code
        area
        callingCodes
        capital
        currencies {
          symbol
          code
          name
        }
        latlng
        nativeName
        region
      }
    }
  }
`

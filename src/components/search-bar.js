import React from "react"
import PropTypes from "prop-types"

import style from "./search-bar.module.scss"

import { FaSearchLocation } from "react-icons/fa"

const SearchBar = ({ callback }) => {
  return (
    <div className={style.searchBar}>
      <FaSearchLocation className="main-icon" />
      <input
        type="text"
        onChange={callback}
        placeholder="Enter Country Name..."
      />
    </div>
  )
}

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default SearchBar

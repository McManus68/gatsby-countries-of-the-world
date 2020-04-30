import React from "react"
import PropTypes from "prop-types"

import style from "./search-bar.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = ({ callback }) => {
  return (
    <div className={style.searchBar}>
      <FontAwesomeIcon icon="search-location" size="6x" className="main-icon" />
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

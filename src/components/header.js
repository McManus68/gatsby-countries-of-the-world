import React from "react"

import style from "./header.module.scss"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "earth.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={style.header}>
      {/*<img src={data.logo.childImageSharp.fixed.src} />*/}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

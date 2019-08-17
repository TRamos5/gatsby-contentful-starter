import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from './container'
import Header from "./header"
import Footer from "./foooter"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 10 }}>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout
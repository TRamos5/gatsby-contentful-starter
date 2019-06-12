/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import ContactButton from "./contactButton"
import BlogButton from "./blogButton"

const style = ({
  bottomContain: {
    boxSizing: 'border-box',
    margin: '10% auto',
    maxWidth: '1140px',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%'
  },
  footerContain: {
    webkitBoxAlign: 'center',
    webkitBoxPack: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%',
    backgroundColor: '#353c43',
    height: '25vh'
  },
  buttonDiv: {
    boxSizing: 'border-box',
    display: 'flex'
  }
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <main>{children}</main>
          <div style={style.bottomContain} className="container">
              <h1>Your Vision Our Code</h1>
              <p>We love what we do and we believe your brand should be showcased in the most extraordinary way.</p>
              <hr/>
              <div style={style.buttonDiv} className="buttonDiv">
                <ContactButton />
                <BlogButton />
              </div>
          </div>
          <footer style={style.footerContain}>
            <img src={'health.png'} alt="logo" />
            © {new Date().getFullYear()}, Powered by
            {` `}
            <a href="">TraVision</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

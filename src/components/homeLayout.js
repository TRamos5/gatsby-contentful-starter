import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import ContactButton from "./contactButton"
import BlogButton from "./blogButton"
import Footer from "./foooter"
import Clients from "./pastClients"

const style = ({
  bottomContain: {
    boxSizing: 'border-box',
    margin: '10% auto',
    maxWidth: '1140px',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%'
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
          <Clients />
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

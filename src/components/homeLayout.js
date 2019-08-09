import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import ContactButton from "./contactButton"
import BlogButton from "./blogButton"
import Footer from "./foooter"

const style = ({
  bottomContain: {
    boxSizing: 'border-box',
    marginTop: '10%',
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

const HomeLayout = ({ children }) => {
    return (
        <div>
          <main>{children}</main>
          <div style={style.bottomContain} className="container">
              <h1>Learning Opens The Gates To Freedom</h1>
              <p>Everyone has a vision, let's work together to see it through! Part of my passion is teaching others what I have learned myself.</p>
              <hr/>
              <div style={style.buttonDiv} className="buttonDiv">
                <ContactButton />
                <BlogButton />
              </div>
          </div>
          <Footer />
        </div>
    )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout

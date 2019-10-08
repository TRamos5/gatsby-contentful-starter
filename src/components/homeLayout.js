import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import ContactButton from "./contactButton"
import BlogButton from "./blogButton"
import AboutMe from "./aboutMe"
import Footer from "./foooter"

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

const HomeLayout = ({ children }) => {
    return (
        <div>
          <main>{children}</main>
          <div style={style.bottomContain} className="container">
              <h1>I Hope You Enjoy The Starter</h1>
              <p>Feel free to customize everything to your liking, it's yours!</p>
              <hr/>
              <div style={style.buttonDiv} className="buttonDiv">
                <ContactButton />
                <BlogButton />
              </div>
          </div>
          <div>
            <AboutMe />
          </div>
          <Footer />
        </div>
    )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout

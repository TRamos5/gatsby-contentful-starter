import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const style = {
  footerContain: {
    webkitBoxAlign: "center",
    webkitBoxPack: "center",
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "100%",
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    width: "100%",
    backgroundColor: "#353c43",
    height: "25vh",
  },
  instaBox: {
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  paraBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1.4%"
  },
  anchor: {
    textDecoration: "none"
  }
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      health: file(relativePath: { eq: "images/health.png" }) {
        childImageSharp {
          fixed(width: 58, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insta: file(relativePath: { eq: "images/insta.png" }) {
          childImageSharp {
              fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
    }
  `)
  return (
    <footer style={style.footerContain}>
      <div style={style.logoBox}>
        <Img fixed={data.health.childImageSharp.fixed} />
      </div>
      <a 
      href="https://www.instagram.com/travis_ramos/" 
      target="_blank"
      rel="noopener noreferrer"
      style={style.instaBox}
      >
        <Img fixed={data.insta.childImageSharp.fixed} />
      </a>
      <p style={style.paraBox}>
        Powered by
        <a style={style.anchor} href="/">TraVision</a>
      </p>
    </footer>
  )
}

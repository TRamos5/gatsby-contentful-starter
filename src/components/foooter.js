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
    backgroundColor: "#5b544c",
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
      gatsby: file(relativePath: { eq: "images/gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 58, height: 58) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insta: file(relativePath: { eq: "images/insta.png" }) {
          childImageSharp {
              fixed(width: 58, height: 58) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
    }
  `)
  return (
    <footer style={style.footerContain}>
      <div style={style.logoBox}>
        <Img fixed={data.gatsby.childImageSharp.fixed} />
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
        <a style={style.anchor} href="https://travision.dev">TraVision</a>
      </p>
    </footer>
  )
}

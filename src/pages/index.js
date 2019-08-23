import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


// import SEO from "../components/seo"
import Layout from "../components/homeLayout"
import Particle from "../components/particle"
import "../components/layout.css"

const style = ({
  wrapper: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  backgroundImg: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-5'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  content: {
    color: 'grey',
    fontSize: '1rem'
  }
})
const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          content
          image {
            file {
              url
            }
          }
        }
        astronomy: file(relativePath: { eq: "images/astronomy.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        content,
        image: {
          //fixed
          file: { url }
        }
      },
      astronomy: {
        childImageSharp: {
          fluid
        }
      }
    }) => (
      <>
      <Layout>
      <div class="wrapper" style={style.wrapper}>
        <img style={style.backgroundImg} src={url} />
        {/* <Img style={style.backgroundImg} fixed={fixed} /> */}
        {/* <Img style={style.backgroundImg} fluid={fluid} /> */}
        <Particle />
        <div style={style.main}>
          <h1 className="title">{title}</h1>
          <h3 style={style.content}>{content}</h3>
        </div>
      </div>
      </Layout>
      </>
    )}
  />
);

export default HomePage;

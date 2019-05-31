import React from "react"
import { StaticQuery, graphql } from "gatsby"


// import SEO from "../components/seo"
import Layout from "../components/layout"
import Particle from "../components/particle"

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
  title: {
    color: 'white'
  },
  content: {
    color: 'grey'
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
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        content,
        image: {
          file: { url }
        }
      }
    }) => (
      <>
      <Layout>
      <div class="wrapper" style={style.wrapper}>
        <img style={style.backgroundImg} src={url} />
        <Particle />
        <div style={style.main}>
          <h1 style={style.title}>{title}</h1>
          <h3 style={style.content}>{content}</h3>
        </div>
      </div>
      </Layout>
      </>
    )}
  />
);

export default HomePage;

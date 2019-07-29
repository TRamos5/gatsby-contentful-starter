import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"

const style = ({
    clientContainer: {
      boxSizing: 'border-box',
      margin: '10% auto',
      maxWidth: '1140px',
      paddingLeft: '15px',
      paddingRight: '15px',
      width: '100%'
    },
  })

export default () => {
  const data = useStaticQuery(graphql`
    query {
      southwestAirlines: file(
        relativePath: { eq: "images/southwestLogo.png" }
      ) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      objectSpectrum: file(relativePath: { eq: "images/objectLogo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bankOfAmerica: file(relativePath: { eq: "images/bankLogo.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="container" style={style.clientContainer}>
      <h2>CUSTOMERS</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid>
          <Img fluid={data.southwestAirlines.childImageSharp.fixed} />
        </Grid>
        <Grid>
          <Img fluid={data.bankOfAmerica.childImageSharp.fixed} />
        </Grid>
        <Grid>
          <Img fluid={data.objectSpectrum.childImageSharp.fixed} />
        </Grid>
      </Grid>
    </div>
  )
}

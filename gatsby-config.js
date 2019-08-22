const dotenv = require("dotenv");
const path = require(`path`)

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `TraVision`,
    description: `Development Studio and Blog`,
    author: `@t_ram5`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TraVision`,
        short_name: `TraVision`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/health.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-material-ui`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
      pathToConfigModule: `src/utils/typography`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // gatsby-plugin-offline,
  ],
}

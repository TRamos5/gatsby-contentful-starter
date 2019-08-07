import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPosts = ({ data }) => {
    const blogPosts = data.allContentfulBlogPost.edges;
    return (
      <Layout>
        <SEO title="Blog posts" />
              <h1>{"Here's a list of all blogposts!"}</h1>
        <div className="blogposts">
          {blogPosts.map(({ node: post }) => (
            <div key={post.id}>
              <Img alt={post.title} fluid={post.image.fluid} />
              <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
          <span className="mgBtm__24" />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  };

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            fluid(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          tags
        }
      }
    }
  }
`
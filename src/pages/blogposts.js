import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const style = {
  postDiv: {
  boxSizing: 'border-box',
  margin: '0 0 100px',
  padding: '3em 5em',
  },
  article: {
  boxSizing: 'border-box',
  color: '#000',
  fontSize: '1.3rem',
  margin: '0',
  padding: '0',
  }
}

const BlogPosts = ({ data }) => {
    const blogPosts = data.allContentfulBlogPost.edges;
    return (
      <Layout>
        <SEO title="Blog posts" />
              <h1>{"TraVision Blog"}</h1>
              <h4>{"Written by Travis Ramos"}</h4>
        <div className="blogposts">
          {blogPosts.map(({ node: post }) => (
            <div style={style.postDiv} key={post.id}>
              <article style={style.article}>
                <h1><Link to={`/blogpost/${post.slug}`}>{post.title}</Link></h1>
                <Link to={`/blogpost/${post.slug}`}>
                  <Img alt={post.title} fluid={post.image.fluid} />
                </Link>
                <h4>{post.excerpt}</h4>
                <h4>{post.date}</h4>
              </article>
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
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          tags
          author {
            authorName
          }
          date(formatString: "MM-DD-YYYY")
          excerpt
        }
      }
    }
  }
`
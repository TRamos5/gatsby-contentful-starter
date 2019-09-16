import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const style = ({
  title: {
    textDecoration: 'none'
  }
})

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <div className="blogposts">
        {blogPosts
          .filter(post => post.node.title.length > 0)
          .map(({ node: post }, index) => (
            <div
              className={`blogPostPreview ${index % 2 !== 0 ? "inverse" : ""}`}
              key={post.id}
            >
              <div className="postInfo">
                  <Link to={`/blogpost/${post.slug}`} style={style.title}><h1 className="blogTitle">{post.title}</h1></Link>
                <div className="meta">
                  <h4 className="date">{post.date}</h4>
                </div>
                <div>
                  <p className="postExcerpt">{post.excerpt}</p>
                </div>
                <div>
                  <Link to={`/blogpost/${post.slug}`} className="buttonEdit">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="post-img">
                <Img alt={post.title} fluid={post.image.fluid} />
              </div>
            </div>
          ))}
        <span className="mgBtm__24" />
      </div>
    </Layout>
  )
}

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

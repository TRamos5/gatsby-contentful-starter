import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  const { title, childContentfulBlogPostContentRichTextNode, image, tags, date } = data.contentfulBlogPost
  // const { previous, next } = this.props.pageContext
  return (
    <Layout>
      <SEO title={title} description={tags} />
      <div style={{ background: "#fff" }}>
        <div>
          <Img alt={title} fluid={image.fluid} />
        </div>
        <div className="wrapper">
          <h1>{title}</h1>
          <p style={{ display: "block" }}>{date}</p>
          <div dangerouslySetInnerHTML={{__html: childContentfulBlogPostContentRichTextNode.childContentfulRichText.html}} />
          <div className="tags">
            {tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <Link to="/blogposts">View More Posts</Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childContentfulBlogPostContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
      tags
      author {
        authorName
      }
      date(formatString: "MM-DD-YYYY")
    }
  }
`

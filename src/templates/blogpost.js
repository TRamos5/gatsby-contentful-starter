import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
    const { title, body, image, tags } = data.contentfulBlogPost;
    return (
        <Layout>
            <SEO title={title} />
            <div className="blogpost">
                <h1>{title}</h1>
                {/* <img alt={title} src={image.file.url} /> */}
                <Img alt={title} fluid={image.fluid} />
                <div className="tags">
                    {tags.map(tag => (
                        <span className="tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="body-text">{body.body}</p>
                <Link to="/blogposts">View More Posts</Link>
                <Link to="/">Home</Link>
            </div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostBySlug ($slug: String!) {
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
            body {
                body
            }
            tags
        }
    }
`

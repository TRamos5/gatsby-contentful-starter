import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/homeLayout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
    const { title, body, image, tags } = data.contentfulBlogPost;
    return (
        <Layout>
            <SEO title={title} />
            <div className="blogpost">
                <h1>{title}</h1>
                <img alt={title} src={image.file.url} />
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
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title 
            slug
            body {
                body
            }
            image {
                file {
                    url
                }
            }
            tags
        }
    }
`

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const style = ({
    authorName: {
        color: '#666565',
    },
    excerptText: {
        paddingRight: '15px',
        paddingLeft: '15px',
        width: '75%',
    }
  })

export default () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulBlogPost {
                author {
                  authorName
                  authorDescription {
                    childMarkdownRemark {
                      html
                    }
                  }
                  authorPhoto {
                    fixed(width: 360, height: 540, resizingBehavior: SCALE) {
                        ...GatsbyContentfulFixed_tracedSVG
                      }
                  }
                }
              }
        }
    `)

    const { authorName, authorPhoto, authorDescription } = data.contentfulBlogPost.author
    const body = authorDescription.html;
    return (
        <div className="aboutContainer">
            <Img className="authorPhoto" alt={authorName} fixed={authorPhoto.fixed} />
            <div className="aboutText" style={style.excerptText}>
                <div className="excerpt">
                   <p dangerouslySetInnerHTML={{__html: body}} />
                </div>
            </div>
        </div>
    )
}
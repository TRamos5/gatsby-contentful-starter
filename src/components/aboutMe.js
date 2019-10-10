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
    },
    aboutText: {
      color: '#706c6b'
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
    return (
        <div className="aboutContainer">
            <Img className="authorPhoto" alt={authorName} fixed={authorPhoto.fixed} />
            <div className="aboutText" style={style.excerptText}>
                <div className="excerpt">
                   <div style={style.aboutText} dangerouslySetInnerHTML={{__html: authorDescription.childMarkdownRemark.html}} />
                </div>
            </div>
        </div>
    )
}
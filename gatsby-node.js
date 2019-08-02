const path = require(`path`)
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blogpost.js`)

    return graphql(`
    {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
            console.log("Error retrieving contentful data", result.errors);
            throw result.errors
        }

        result.data.allContentfulBlogPost.edges.forEach(edge => {
            createPage({
                path: `/blogpost/${edge.node.slug}/`,
                component: slash(blogPostTemplate),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id
                }
            })
        })
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error)
    })
}
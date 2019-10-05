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

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((edge, index) => {
          const previous = index === 0 ? false : posts[index - 1].node;
          const next = index === posts.length - 1 ? false : posts[index + 1].node;
            createPage({
                path: `/blogpost/${edge.node.slug}/`,
                component: slash(blogPostTemplate),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id,
                    previous,
                    next
                }
            })
        })
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error)
    })
}
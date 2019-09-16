import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="fourOfour">
      <h1 className="fourOfourTitle">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Go back to the <Link to="/">Homepage</Link> and try again!
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

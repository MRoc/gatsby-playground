import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/small-profile.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="This is Sammy the Shark"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>Hello Shoppers, we are open for business!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>We sell fresh fruit.</p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

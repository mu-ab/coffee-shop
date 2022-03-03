import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { hero } from "./index.module.scss"
import BlogList from "../components/BlogList"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }

      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        frontmatter {
          tagline
          heroImage
        }
      }
    }
  `)

  const tagline = data.markdownRemark.frontmatter.tagline
  const heroImage = data.markdownRemark.frontmatter.heroImage

  return (
    <Layout>
      <div className={hero} style={{ backgroundImage: `url('${heroImage}')` }}>
        <h1>{tagline}</h1>
      </div>
      <BlogList />
    </Layout>
  )
}

import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { hero } from "./index.module.scss"
import BlogList from "../components/BlogList"
import BackgroundImage from "gatsby-background-image"

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
          heroImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const tagline = data.markdownRemark.frontmatter.tagline
  const heroImage = data.markdownRemark.frontmatter.heroImage

  return (
    <Layout>
      <BackgroundImage className={hero} fluid={heroImage.childImageSharp.fluid}>
        <h1>{tagline}</h1>
      </BackgroundImage>
      <BlogList />
    </Layout>
  )
}

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import { blog } from "./blog.module.scss"

export default function BlogTemplate({ data }) {
  return (
    <Layout>
      <div className={blog}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

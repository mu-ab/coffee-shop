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
    }
  `)

  return (
    <Layout>
      <div className={hero}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
      <BlogList />
    </Layout>
  )
}

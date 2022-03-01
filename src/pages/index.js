import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

import { hero } from "./index.module.scss"

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

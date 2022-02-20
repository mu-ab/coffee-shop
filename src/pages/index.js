import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

import { hero } from "./index.module.css"

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
      <div id={hero}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
      <BlogList />
    </Layout>
  )
}

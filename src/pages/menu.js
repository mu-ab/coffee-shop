import React from "react"

import Layout from "../components/Layout"
import MenuCategory from "../components/MenuCategory"

import { graphql } from "gatsby"

// import { main } from "./menu.module.scss"

export default function Menu({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div>
          {data.markdownRemark.frontmatter.categories.map(category => (
            <MenuCategory key={category.name} category={category} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
      frontmatter {
        title
        categories {
          name
          items {
            name
            description
            price
          }
        }
      }
    }
  }
`

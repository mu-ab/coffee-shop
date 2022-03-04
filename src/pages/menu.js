import React from "react"

import Layout from "../components/Layout"
import MenuCategory from "../components/MenuCategory"

import { graphql, useStaticQuery } from "gatsby"

import { main } from "./menu.module.scss"

export default function Menu() {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      <div className={main}>
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

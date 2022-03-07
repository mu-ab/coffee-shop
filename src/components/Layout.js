import React from "react"
import { header } from "./Layout.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "coffee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <BackgroundImage
        className={header}
        fluid={data.file.childImageSharp.fluid}
      >
        <div>
          <h1>
            <Link to="/">Joe's Coffee Shop</Link>
          </h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </BackgroundImage>
      <main>{children}</main>
    </div>
  )
}

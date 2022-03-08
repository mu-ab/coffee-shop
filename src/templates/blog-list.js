import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import BlogPost from "../components/BlogPost"
import Layout from "../components/Layout"

import {
  hero,
  blogList,
  pageLinks,
  pageLinksAnchor,
} from "./blog-list.module.scss"

export default function BlogListTemplate({ data, pageContext }) {
  // Generate the previous and next page URLs.
  const previousPage =
    pageContext.currentPage === 2
      ? "/blog"
      : `/blog/${pageContext.currentPage - 1}`

  const nextPage = `/blog/${pageContext.currentPage + 1}`

  return (
    <Layout>
      <BackgroundImage className={hero} fluid={data.file.childImageSharp.fluid}>
        <h1>The coffee Blog</h1>
      </BackgroundImage>

      <main className={blogList}>
        {data.allMarkdownRemark.edges.map(node => (
          <BlogPost
            key={node.node.id}
            slug={node.node.fields.slug}
            title={node.node.frontmatter.title}
            date={node.node.frontmatter.date}
            excerpt={node.node.excerpt}
          />
        ))}
      </main>
      <div className={pageLinks}>
        {pageContext.currentPage > 1 && (
          <Link className={pageLinks} to={previousPage}>
            {"<< Previous page"}
          </Link>
        )}

        {pageContext.currentPage < pageContext.pageCount && (
          <Link className={pageLinksAnchor} to={nextPage}>
            {" "}
            {"Next Page >>"}{" "}
          </Link>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

    #  processed Image query
    file(relativePath: { eq: "latte.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

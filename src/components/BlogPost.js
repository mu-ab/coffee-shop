import React from "react"
import { blog, blogH2, blogH3 } from "./BlogPost.module.css"
import { Link } from "gatsby"

export default function BlogPost({ title, date, excerpt, slug }) {
  return (
    <article className={blog}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <h2 className={blogH2}>{title}</h2>
      <h3 className={blogH3}>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}

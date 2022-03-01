import React from "react"
import { Link } from "gatsby"
import { blog } from "./BlogPost.module.scss"

export default function BlogPost({ title, date, excerpt, slug }) {
  return (
    <article className={blog}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}

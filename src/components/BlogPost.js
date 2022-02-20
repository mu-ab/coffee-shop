import React from "react"
import { blog, blogH2, blogH3 } from "./BlogPost.module.css"

export default function BlogPost({ title, date, excerpt }) {
  return (
    <article className={blog}>
      <h2 className={blogH2}>{title}</h2>
      <h3 className={blogH3}>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}

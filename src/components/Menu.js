import React from "react"
import { main, menu } from "./Menu.module.css"
import MenuCategory from "./MenuCategory"

export default function Menu() {
  data
}
{
  return (
    <div className={main}>
      <h1>{data.markdownRemark.frontmatter.tite}</h1>
      <div>
        {data.markdownRemark.frontmatter.categories.map(category => (
          <MenuCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  )
}

import React from "react"
import { categoryStyles } from "./MenuCategory.module.scss"

export default function MenuCategory({ category }) {
  return (
    <div className={categoryStyles}>
      <h2>{category.name}</h2>
      <ul>
        {category.items.map(item => (
          <li key={item.name}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

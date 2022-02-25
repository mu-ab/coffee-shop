import React from "react"
import { header, inner } from "./Layout.module.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <header id={header}>
        <div id={inner}>
          <h1>
            <Link to="/">Joe's Coffee Shop</Link>
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

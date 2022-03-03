import React from "react"
import { header } from "./Layout.module.scss"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <header className={header}>
        <div>
          <h1>
            <Link to="/">Joe's Coffee Shop</Link>
          </h1>
          <Link to="/blog">Blog</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

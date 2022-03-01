import React from "react"
import { Link } from "gatsby"
import { header, link } from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div>
      <header className={header}>
        <div>
          <h1>
            <Link className={link} to="/">
              Joe's Coffee Shop
            </Link>
          </h1>
          <Link className={link} to="/blog">
            Blog
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

import React from "react"
import {
  header,
  headerInner,
  headerH1,
  headerH1Anchor,
} from "./Layout.module.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <header className={header}>
        <div className={headerInner}>
          <h1 className={headerH1}>
            <Link className={headerH1Anchor} to="/">
              Joe's Coffee Shop
            </Link>
          </h1>
          <Link className={headerH1Anchor} to="/blog">
            Blog
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

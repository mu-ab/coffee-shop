import React from "react"
import { header, inner } from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <header id={header}>
        <div id={inner}>
          <h1>Joe's Coffee Shop</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

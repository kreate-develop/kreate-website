import React from "react"

import Header from "./header"

import s from "./layout.module.scss"
import "../styles/index.scss"
import { Footer } from "./Footer"

export default ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  )
}

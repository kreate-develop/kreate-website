import React from "react"

import Header from "./header"

import s from "./layout.module.scss"
import "../styles/index.scss"

export default ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  )
}

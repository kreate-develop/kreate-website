import React from "react"

import Header from "./header"

import "../styles/index.scss"
import { Footer } from "./Footer"

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

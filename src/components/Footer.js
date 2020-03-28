import React from "react"

import s from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer
      className={`${s.Footer} bg-gray-100 w-full rounded-tl-md rounded-tr-md w-full h-64 xs:h-40`}
    >
      <div className="container"></div>
    </footer>
  )
}

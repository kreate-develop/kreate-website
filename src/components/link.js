import React from "react"
import { Link } from "gatsby"

import s from "./link.model.scss"

export const StyledLink = ({ children, to }) => {
  return (
    <Link className={s.innerHeader_navigation_list_item} to={`/${to}`}>
      {children}
    </Link>
  )
}

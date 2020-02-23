import React from "react"
import { Link } from "gatsby"

import s from "./link.module.scss"

export const StyledLink = ({ children, to }) => {
  return (
    <Link
      className={s.innerHeader_navigation_list_item}
      activeClassName={s.Active}
      to={`${to}`}
    >
      {children}
    </Link>
  )
}

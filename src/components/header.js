import React from "react"
import { Link } from "gatsby"

import s from "./header.module.scss"
import { StyledLink } from "./link"

export default () => {
  return (
    <header className={s.mainHeader}>
      <nav className={s.innerHeader}>
        <div className={s.innerHeaderHome}>
          <Link to="/">
            <h3 className={s.Kreate}>Kre</h3>
            <span className={s.ate}>ate</span>
          </Link>
        </div>
        <div className={s.innerHeader_navigation}>
          <ul className={s.innerHeader_navigation_list}>
            <li>
              <StyledLink to="/about_us">About us</StyledLink>
            </li>
            <li>
              <StyledLink to="/services">Services</StyledLink>
            </li>
            <li>
              <Link to="/Contact_us" className={s.contactUs}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

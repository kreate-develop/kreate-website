import React from "react"
import { Link } from "gatsby"

import s from "./header.module.scss"
import { StyledLink } from "./link"

export default () => {
  return (
    <header className="h-16 w-full relative">
      <nav
        className={`${s.innerHeader} 
        w-full
        box-border 
        fixed 
        px-5
        h-16 
        top-0 
        bottom-0 
        z-10 
        flex 
        flex-col
        justify-start
        items-start
        md:flex-row 
        xs:flex-row 
        md:items-center 
        md:justify-between`}
      >
        <div className={s.innerHeaderHome}>
          <Link to="/">
            <h3 className={s.Kreate}>Kre</h3>
            <span className={s.ate}>ate</span>
          </Link>
        </div>
        <div className="w-auto hidden md:block xs:block xl:block">
          <ul
            className={`${s.innerHeader_navigation_list} m-0 flex justify-around items-center`}
          >
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

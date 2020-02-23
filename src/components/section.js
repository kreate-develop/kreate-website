import React from "react"

import s from "./styledSection.module.scss"

export const StyledSection = ({ children, color, shadow }) => {
  return (
    <section
      className={`${s.StyledSection} ${shadow && s.shadow}`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className={s.content}>{children}</div>
    </section>
  )
}

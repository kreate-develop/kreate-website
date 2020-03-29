import React from "react"

import s from "./Title.module.scss"

export default ({ label, color, classes }) => {
  return (
    <div className={`${s.Title} flex border-box w-auto ${classes && classes}`}>
      <h1
        style={{ color: `${color && color}`, borderColor: `${color && color}` }}
      >
        {label}
      </h1>
    </div>
  )
}

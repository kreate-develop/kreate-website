import React from "react"

import s from "./Title.module.scss"

export default ({ label, color }) => {
  return (
    <div className={`${s.Title} flex border-box w-auto`}>
      <h1
        style={{ color: `${color && color}`, borderColor: `${color && color}` }}
      >
        {label}
      </h1>
    </div>
  )
}

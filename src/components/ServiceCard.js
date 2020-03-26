import React from "react"

import s from "./ServiceCard.module.scss"

export default props => {
  const { icon, title, content, color } = props
  console.log(color)
  return (
    <div className={s.ServiceCard}>
      <div className={s.serviceCardCircle}>
        <div
          className={s.ServiceCardIcon}
          style={{ backgroundColor: `${color && color}` }}
        >
          <i className="material-icons">{icon}</i>
        </div>
      </div>
      <div className={s.ServiceCardContent}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>

      <div
        className={s.ServiceCardExplore}
        style={{ backgroundColor: `${color && color}` }}
      >
        <span>
          explore <i className="material-icons">arrow_forward</i>
        </span>
      </div>
    </div>
  )
}

import React from "react"

import s from "./ServiceCard.module.scss"

export default props => {
  const { icon, title, content, color } = props
  console.log(color)
  return (
    <div className={`${s.ServiceCard} mb-10 xs:mb-0 xs:mr-10 shadow-lg`}>
      <div
        className={`${s.serviceCardCircle} w-full flex justify-center items-center`}
      >
        <div
          className="bg-black h-32 w-32 rounded-full flex justify-center items-center"
          style={{ backgroundColor: `${color && color}` }}
        >
          <i className="material-icons text-6xl text-white">{icon}</i>
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

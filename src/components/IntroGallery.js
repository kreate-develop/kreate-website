import React from "react"

import s from "./IntronGallery.module.scss"

export const IntroGallery = props => {
  const { images } = props

  return (
    <div className={s.GalleryContainer}>
      {images.map((image, idx) => (
        <div key={idx} className={s.GalleryImage}>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  )
}

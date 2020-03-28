import React from "react"

export const IntroGallery = props => {
  const { images } = props

  return (
    <div className="w-full flex justify-center items-center relative">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="border-box overflow-hidden m-1 w-32 h-32 rounded-full"
        >
          <img className="h-full bg-cover" src={image} alt="" />
        </div>
      ))}
    </div>
  )
}

import React from "react"

export const IntroGallery = props => {
  const { images } = props

  return (
    <div className="w-full flex justify-center items-center relative">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="border-box w-24 h-24 md:w-32 md:h-32 mr-5 md:mr-1 rounded-full"
        >
          <img className="h-full rounded-full bg-cover" src={image} alt="" />
        </div>
      ))}
    </div>
  )
}

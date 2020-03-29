import React from "react"

export const IntroGallery = props => {
  const { images } = props

  const image = idx => images[idx]

  return (
    <div className="w-full flex justify-center items-center relative pr-64 mr-20 xs:pr-0 xs:mr-0">
      <div className="border-box  w-48 h-48 mr-5 md:mr-1 absolute inset-x-0 ">
        <img
          className="h-full rounded-full border-4 border-white bg-cover"
          src={image(0)}
          alt=""
        />
      </div>
      <div
        className="border-box  w-48 h-48 mr-5 md:mr-1 absolute"
        style={{ left: "80" }}
      >
        <img
          className="h-full rounded-full bg-cover border-4 border-white"
          src={image(1)}
          alt=""
        />
      </div>
      <div
        className="border-box  w-48 h-48 mr-5 md:mr-1 absolute"
        style={{ left: "160px" }}
      >
        <img
          className="h-full rounded-full bg-cover border-4 border-white"
          src={image(2)}
          alt=""
        />
      </div>
    </div>
  )
}

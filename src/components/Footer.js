import React from "react"

import s from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer
      className={`${s.Footer} bg-gray-100 w-full rounded-tl-md rounded-tr-md w-full h-64 xs:h-40`}
    >
      <div className="container flex flex-col w-full">
        <div className="flex justify-center items-center h-32 px-40"></div>
        <div className="h-5 flex justify-center items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Kreate</p>
        </div>
      </div>
    </footer>
  )
}

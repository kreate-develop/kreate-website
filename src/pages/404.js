import React from "react"
import { StyledLink } from "../components/link"

export default () => {
  return (
    <div className="h-screen relative">
      <div className="p-5 absolute inset-x-0">
        <StyledLink to="/">
          <i className="material-icons">highlight_off</i>
        </StyledLink>
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <h1>seems like the page you're looking for does not exist</h1>
        </div>
        <div>
          <p>kreate team</p>
        </div>
      </div>
    </div>
  )
}

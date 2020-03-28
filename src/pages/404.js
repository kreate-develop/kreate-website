import React from "react"
import { StyledLink } from "../components/link"

export default () => {
  return (
    <div>
      <StyledLink to="/">Go home</StyledLink>

      <div className="not-found">
        <h1>seems like the page you're looking for does not exist</h1>
        <p>kreate team</p>
      </div>
    </div>
  )
}

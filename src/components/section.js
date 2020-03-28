import React from "react"

export const StyledSection = ({ children, color, shadow }) => {
  return (
    <section style={{ backgroundColor: `${color}` }}>
      <div className="container flex flex-col items-center justify-center m-auto">
        {children}
      </div>
    </section>
  )
}

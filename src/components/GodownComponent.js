import React from "react"

const GodownComponent = ({ mainColor }) => {
  return (
    <svg width={65} height={65} viewBox="0 0 65 65">
      <defs>
        <style>
          {`.a{fill:transparent;stroke:${mainColor};stroke-width:3px;}
          .b{fill:${mainColor};}
          .c{stroke:none;}
          .d{fill:none;}`}
        </style>
      </defs>
      <g className="a">
        <circle className="c" cx={32.5} cy={32.5} r={32.5} />
        <circle className="d" cx={32.5} cy={32.5} r={31} />
      </g>
      <path
        className="b"
        d="M28,16l-2.115-2.115L17.5,22.255V4h-3V22.255L6.13,13.87,4,16,16,28Z"
        transform="translate(17 17)"
      />
    </svg>
  )
}

export default GodownComponent

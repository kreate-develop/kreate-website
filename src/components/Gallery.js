import React from "react"

export default () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <div className="border-box border-2 border-gray-100 flex w-full h-64">
        <div className="w-2/4 h-full border-box border-2 border-gray-100">
          <img className="bg-cover h-full" src={"4.jpg"} alt="" />
        </div>
        <div className="w-2/4 h-full border-box border-2 border-gray-100">
          <img className="h-full bg-cover" src={"3.jpg"} alt="" />
        </div>
      </div>
      <div className="border-box border-2 border-t-0 border-gray-100 flex justify-center w-full h-full">
        <img className="bg-cover w-full" src={"map.jpg"} alt="" />
      </div>
    </div>
  )
}

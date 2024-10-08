import React from 'react'

export const Medidas = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Medidas
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">Lista de 
          <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">{" "} Dispostivos</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lh:mt-20"></div>
    </div>
  )
}

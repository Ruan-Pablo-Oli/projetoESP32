import React from 'react'
import {useApi} from '../../hooks/useApi'
import {Link} from 'react-router-dom'

export const Medidas = () => {
  

  const {data} = useApi('/devices')
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Medidas
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">Lista de 
          <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
            {" "} Dispostivos</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
      {data?.data?.message?.map((dispositivo,index)=>(
          <div key={index} className="w-full sm:1/2 lg:w-1/4">
          <div className="flex">
            <div className="flex mx-15 items-center w-10 h-10 p-2 text-blue-700 ">
            </div>
            <Link to ={`/medidas/${dispositivo._id}`}>
            <div  className="text-blue-700 bg-neutral-800 rounded-lg p-10 mb-10 mt-10">
            <h5 className="flex mt-1 mb-6 p-1 justify-center text-xl bg-neutral-900 rounded-lg">
              {dispositivo.nome}
            </h5>
            <p>
            <img src={dispositivo.imagem} alt="imagem" className="mx-auto rounded-full rounded-lg w-1/2 mb-10 border border-purple-700"></img>
            </p>
            <p>
              {dispositivo.descricao}
            </p>
            </div>
            </Link>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


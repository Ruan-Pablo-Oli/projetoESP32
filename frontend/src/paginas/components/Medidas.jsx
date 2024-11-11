import React, { useEffect } from 'react'
import {useApi} from '../../hooks/useApi'
import {Link} from 'react-router-dom'
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';

export const Medidas = () => {
  
  Userfront.init("pn4vd7yn");

  let navigate = useNavigate()

  useEffect(() => {
    if (!Userfront.tokens.accessToken) {
      return navigate('/login')
    }
  })

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
      <div className="flex flex-wrap items-center justify-center  mt-10 lg:mt-20">
      {data?.data?.message?.map((dispositivo,index)=>(
          <div key={index} className="sm:1/2 lg:w-1/6 mr-5 ">
          <div className="flex flex-wrap " >
            <Link to ={`/medidas/${dispositivo._id}`}>
            <div  className="text-blue-700 bg-neutral-800 rounded-lg  p-10 mb-10 mt-10">
            <h5 className="flex mt-1 mb-6 p-1 justify-center text-xl bg-neutral-900 rounded-lg">
              {dispositivo.nome}
            </h5>
            <p>
            <img src={dispositivo.imagem} alt="imagem" className="mx-auto rounded-full w-40 h-40 rounded-lg object-cover mb-10 border border-purple-700"></img>
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


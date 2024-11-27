import React from 'react'
import { useState } from 'react'

export const FormsContatos = () => {

  const [email,setEmail] = useState()
  const [nome,setNome] = useState()
  const [mensagem,setMensagem] = useState()


  return (
      <div className="flex flex-col justify-center items-center h-1/2  ">
          <form className="bg-neutral-900 p-6 rounded-lg shadow-md w-full max-w-md" >
              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="nome">
                      Nome
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="nome"
                      type="text"
                      value={nome}
                      onChange={(e)=>setNome(e.target.value)}
                  />
              </div>

              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="description">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                  />
              </div>

              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="image">
                      Mensagem
                  </label>
                  <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="mensagem"
                      type="text"
                      rows = "2"
                      value={mensagem}
                      onChange={(e)=>setMensagem(e.target.value)}
                  />
              </div>
          </form>

              <button
                type="submit"
                className=' active:animate-ping w-full max-w-md mt-4  bg-gradient-to-r from-blue-500 to-blue-900 shadow-md bg-green-500 text-white px-5 py-3 rounded-full  hover:animate-pulse'
              >
                  Enviar
              </button>
      </div>
      )
}

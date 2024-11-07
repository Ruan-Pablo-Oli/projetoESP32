import React, { useState } from 'react'
import { addRegistro } from '../../services/api'

const NovoDevice = () => {

    const [nome,setNome] = useState()
    const [email, setEmail] = useState()
    const [descricao, setDescricao] = useState()
    const [imagem, setImagem] = useState()

    const data = {nome,email,descricao,imagem}

    function handler(){
        addRegistro(data)
    }


  return (
      <div className="  flex  flex-col items-center justify-center h-1/2 ">
          <form className="bg-neutral-900 p-6 rounded shadow-md w-full max-w-md">
              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="Email">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="Email"
                      value = {email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Digite o seu email"
                  />
              </div>

              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="nome">
                      Nome
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      type="text"
                      placeholder="Digite o nome do device"
                  />
              </div>

              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="descricao">
                      Descricao
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="descricao"
                      type="text"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      placeholder="Digite a descricao do device"
                  />
              </div>
              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="imagem">
                      Imagem
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="imagem"
                      value={imagem}
                      onChange={(e) => setImagem(e.target.value)}
                      type="text"
                      placeholder="Digite a url da imagem do device"
                  />
              </div>

          </form>  

          <div>
              <button
                  className="mt-4 mr-5 bg-gradient-to-r from-blue-500 to-blue-800 bg-blue-500 text-white px-4 py-2 rounded-md hover:animate-pulse"
              >
                  Cancelar
              </button>

              <button
                  onClick={() => handler(data.nome,data.email,data.imagem,data.descricao)}
                  className='mt-4 mr-5 bg-gradient-to-r from-green-500 to-green-900 bg-green-500 text-white px-4 py-2 rounded-md hover:animate-pulse'
              >
                  Adicionar
              </button>

          </div>
        </div>          
)
}

export default NovoDevice
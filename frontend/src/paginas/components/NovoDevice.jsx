import React from 'react'

const NovoDevice = () => {
  return (
      <div className="flex justify-center items-center h-1/2 ">
          <form className="bg-neutral-900 p-6 rounded shadow-md w-full max-w-md">
              <div className="mb-4">
                  <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="Email">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                      id="Email"
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
                      type="text"
                      placeholder="Digite a url da imagem do device"
                  />
              </div>

              <div>
                  <button
                       className="mt-4 mr-5 bg-gradient-to-r from-blue-500 to-blue-800 bg-blue-500 text-white px-4 py-2 rounded hover:animate-pulse"
                  >
                      Cancelar
                  </button>

                  <button
                    
                      className='mt-4 mr-5 bg-gradient-to-r from-green-500 to-green-900 bg-green-500 text-white px-4 py-2 rounded:md hover:animate-pulse'
                  >
                      Adicionar
                  </button>

              </div>
          </form>  
        </div>          
)
}

export default NovoDevice
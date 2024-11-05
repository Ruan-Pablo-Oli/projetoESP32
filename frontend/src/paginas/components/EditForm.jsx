import React from 'react'

export const EditForm = ({name,description,image,id,setId,setDescription,setImage,setName}) => {
    return (
        <div className="flex justify-center items-center h-1/2 ">
            <form className="bg-neutral-900 p-6 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="name">
                        Nome
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        placeholder="Digite o nome do device"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="description">
                        Descrição
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        type="text"
                        placeholder="Digite uma descrição para o device"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="image">
                        Imagem
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                        type="text"
                        placeholder="coloque o endereço da imagem"
                    />
                </div>
            </form>
        </div>    
    )    
}

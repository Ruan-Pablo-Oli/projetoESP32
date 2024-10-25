import React from 'react'
import {useApi} from '../../hooks/useApi'
function ListaDevices() {

    const {data} = useApi('/devices')
  return (
    <div>
        <table className="w-full border border-purple-900 rounded-md divide-y divide-purple-800 text-center">
            <thead>
                 <tr>
                    <th className="border border-purple-800">Imagem </th>
                    <th className="border border-purple-800">Device </th>
                    <th className="border border-purple-800">Data</th>
                 </tr>
             </thead>
        <tbody>
            {data?.data?.message?.map(device =>{
                return(
                    <tr>
                    <td className='border border-purple-800'> <img src={device.imagem} alt="imagem" className="rounded-full rounded-lg w-14 relative border mx-auto border-purple-700"></img></td>
                    <td className='border border-purple-800'>{device.nome}</td>
                    <td className='border border-purple-800'>{device.medidas.map(med =>{
                      return (
                        <div>{med.data}</div>
                      )
                    })}</td>
                  </tr>
                )    
            })}
        </tbody>
        </table>
    </div>
  )
}

export default ListaDevices
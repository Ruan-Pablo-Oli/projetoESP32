import React from 'react'
import {useApi} from '../../hooks/useApi'
import Userfront from "@userfront/core";
import { jwtDecode } from 'jwt-decode'


const  ListaDevices = ({setActiveTab}) => {


  const userData = jwtDecode(Userfront.tokens.idToken)
  const email = userData.email
  
  const {data} = useApi(`/devices/${email}`)
  return (
    data?.data?.message.length > 0 ?
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
            {data?.data?.message?.map((device,index) =>{
                return(
                    <tr key={index}>
                    <td className='border border-purple-800'> <img src={device.imagem} alt="imagem" className="rounded-full rounded-lg w-14 relative border mx-auto border-purple-700"></img></td>
                    <td className='border border-purple-800'>{device.nome}</td>
                    <td className='border border-purple-800'>{device.medidas.map((med,index) =>{
                      return (
                        <div key={index}>
                          <div>{med.data}</div>

                        </div>
                      )
                    })}</td>
                  </tr>
                )    
            })}
        </tbody>
        </table>
    </div>
    : 
    <div className="text-center">
      <button onClick= {() => setActiveTab(3)}className="mt-4 mr-5 bg-gradient-to-r from-purple-500 to-blue-900 text-white px-4 py-3 rounded-full hover:animate-pulse">
            Novo device
      </button>
      </div>
  )
}

export default ListaDevices
import React from 'react'
import {useParams} from 'react-router-dom'
import {useApi} from '../../hooks/useApi'
export const Detalhes = () => {
  const {id} = useParams()
  const {data} = useApi(`/devices/detalhes/${id}`)


  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900">
    <div className="bg-neutral-700 p-4 rounded-lg shadow-md mt-24 w-1/3">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text text-center text-2xl">{data?.data?.message?.nome}</h1>
        <table className="w-full border border-purple-800 rounded-md divide-y divide-purple-800 text-center">
        <thead>
          <tr>
            <th >KW/h </th>
            <th>Corrente </th>
            <th>Voltagem</th>
            <th>Fator de Potência </th>
            <th>Data </th>
            <th>Hora</th>

          </tr>
        </thead>
        <tbody>
          {data?.data?.message?.medidas.map(med => {
            return (<tr>
              <td>{med.kwh}</td>
              <td>{med.corrente}</td>
              <td>{med.voltagem}</td>
              <td>{med.fp}</td>
              <td>{med.data}</td>
              <td>{med.hora}</td>

            </tr>
            )
          })}
        </tbody>
        </table>
    </div>
    </div>
  )
}


import React from 'react'
import {useParams} from 'react-router-dom'
import {useApi} from '../../hooks/useApi'
import moment from 'moment'

export const Detalhes = () => {
  const {id} = useParams()
  const {data} = useApi(`/devices/${id}`)


  return (
    <div>
      <h2>{data?.data?.message?.nome}</h2>
       <h2>{moment(data?.data?.message?.data).format('DD-MM-YYYY')}</h2>
       
    </div>
  )
}


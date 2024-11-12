import React, { useEffect } from 'react'
import { TabViewAdm } from './TabViewAdm'
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';


export const Administracao = () =>  {
  Userfront.init("pn4vd7yn");

  let navigate = useNavigate()

  useEffect(() => {
    if(!Userfront.tokens.accessToken){
      return navigate('/login')
    }
  })


  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <TabViewAdm>

      </TabViewAdm>
    </div>
  )
}

export default Administracao
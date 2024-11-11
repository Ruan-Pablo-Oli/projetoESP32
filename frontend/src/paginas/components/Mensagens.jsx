import React,{useEffect} from 'react'
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';
export const Mensagens = () => {


  Userfront.init("pn4vd7yn");

  let navigate = useNavigate()

  useEffect(() => {
    if (!Userfront.tokens.accessToken) {
      return navigate('/login')
    }
  })
  return (
    <div>Mensagens</div>
  )
}

export default Mensagens
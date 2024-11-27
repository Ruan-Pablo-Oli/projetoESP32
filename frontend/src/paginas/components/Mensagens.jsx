import React,{useEffect} from 'react'
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';
import { FormsContatos } from './FormsContatos';


export const Mensagens = () => {


  Userfront.init("pn4vd7yn");

  let navigate = useNavigate()

  useEffect(() => {
    if (!Userfront.tokens.accessToken) {
      return navigate('/login')
    }
  })
  return (
    <div className='relative mt-40'>
      <FormsContatos></FormsContatos>
    </div>
  )
}

export default Mensagens
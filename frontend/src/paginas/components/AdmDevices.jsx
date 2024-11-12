
import {useApi} from '../../hooks/useApi'
import React,{useState} from 'react'
import Modal from './Modal'
import { editRegistro,deleteRegistro } from '../../services/api'
import Userfront from "@userfront/core";
import { jwtDecode } from 'jwt-decode'




const AdmDevices = ({setActiveTab}) => {   
    const userData = jwtDecode(Userfront.tokens.idToken)
    const email = userData.email
    const {data} = useApi(`/devices/${email}`)
    const [showModal, setShowModal] = useState(false);
    const [id,setId] = useState()
    const [description,setDescription] = useState()
    const [name, setName] = useState()
    const [image, setImage] = useState()


    const del =(id)=>{
      deleteRegistro(id);
    }
    
    const edit = (id,data) =>{
      saveAndEdit(id,data)
    }

    const [option,setOption] = useState({
      delete:{
        header:"Deletar device? ",
        label:"Deletar",
        mostraBody: true,
        body : "Tem certeza que deseja deletar? ",
        callBack:del
      },
      edit:{
        header:"Editar device",
        label:"Salvar",
        mostraBody: false,
        callBack: edit
      }
    })


    const [optionNow,setOptionNow] = useState({
      header:"",
      label:"",
      deleta: null,
      body: "",
      id : ""
    })

    const handleClick = (option,device) => {
      setShowModal(true);
      setOptionNow(option);
      setId(device._id);
      setName(device.nome);
      setDescription(device.descricao);
      setImage(device.imagem);
    };


    const saveAndEdit = (id,data) => {
      const newRegDevice = {
        nome : data.nome,
        descricao: data.descricao,
        imagem: data.imagem
      }
      editRegistro(id,newRegDevice)
    }

  
    
  return (
    data?.data?.message?.length  > 0 ? 
    <table className="w-full border border-purple-900 rounded-md divide-y divide-purple-800 text-center">
        <thead>
             <tr>
                <th className="border border-purple-800">Imagem </th>
                <th className="border border-purple-800">Device ID </th>
                <th className="border border-purple-800">Nome </th>
                <th className="border border-purple-800">Data de cadastro </th>
                <th className="border border-purple-800">Ações </th>

             </tr>
         </thead>
    <tbody>
        {data?.data?.message?.map((device,index) =>{
            return(
                <tr key={index}>
                <td className='border border-purple-800'> <img src={device.imagem} alt="imagem" className="rounded-full rounded-lg w-14 relative border mx-auto border-purple-700"></img></td>
                <td className='border border-purple-800'>{device._id}</td>
                <td className='border border-purple-800'>{device.nome}</td>
                <td className='border border-purple-800'>{device.medidas.map((med,index) =>{
                  return (
                    <div key={index}>
                      <div>{med.data}</div>

                    </div>
                  )
                })}</td>
                <td className='border border-purple-800'>
                <button onClick={() => handleClick(option.edit,device)}className="py-2 px-3 mr-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-800 hover:animate-pulse active:animate-ping">Editar</button> 
                <button  onClick={() =>handleClick(option.delete,device)}className="py-2 px-3  rounded-md bg-gradient-to-r from-red-500 to-red-800 hover:animate-pulse active:animate-ping">Deletar</button>
                <Modal show={showModal} onClose={() => setShowModal(false)} optionNow={optionNow} id={id} name={name} description={description} image={image} setId={setId} setName={setName} setDescription={setDescription} setImage={setImage}/>
                </td>

              </tr>
            )    
        })}
    </tbody>
    </table>
    :
    <div className="text-center">
        <button onClick={() => setActiveTab(3)} className="mt-4 mr-5 bg-gradient-to-r from-purple-500 to-blue-900 text-white px-4 py-3 rounded-full hover:animate-pulse">
          Novo device
        </button>
    </div>
);
}



export default AdmDevices
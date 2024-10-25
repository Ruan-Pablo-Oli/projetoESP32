
import {useApi} from '../../hooks/useApi'
import React,{useState} from 'react'


const ModalDelete = ({show,onClose,Nome}) =>{
    if(!show) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-neutral-900 p-5 rounded-lg w-1/2">
          <h2 className="text-xl font-bold mb-4">Deletar device?</h2>
          <p className="mb-4">Tem certeza que deseja deletar  o(a) {Nome}</p>
          <button 
            onClick={onClose} 
            className="mt-4 mr-5 bg-gradient-to-r from-blue-500 to-blue-800 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Fechar
          </button>
          <button 
            onClick={onClose} 
            className="mt-4 mr-5 bg-gradient-to-r from-red-500 to-red-900 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    );
}





const AdmDevices = () => {   
    const {data} = useApi('/devices')
    const [showModal, setShowModal] = useState(false);
  
    
  return (
    <div>
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
        {data?.data?.message?.map(device =>{
            return(
                <tr>
                <td className='border border-purple-800'> <img src={device.imagem} alt="imagem" className="rounded-full rounded-lg w-14 relative border mx-auto border-purple-700"></img></td>
                <td className='border border-purple-800'>{device._id}</td>
                <td className='border border-purple-800'>{device.nome}</td>
                <td className='border border-purple-800'>{device.medidas.map(med =>{
                  return (
                    <div>{med.data}</div>
                  )
                })}</td>
                <td className='border border-purple-800'>
                <button className="py-2 px-3 mr-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-800 hover:animate-pulse active:animate-ping">Editar</button> 
                <button  onClick={() => setShowModal(true)}className="py-2 px-3  rounded-md bg-gradient-to-r from-red-500 to-red-800 hover:animate-pulse active:animate-ping">Deletar</button>
                <ModalDelete show={showModal} onClose={() => setShowModal(false)} Nome={device.nome} />
                </td>

              </tr>
            )    
        })}
    </tbody>
    </table>
</div>

);
}



export default AdmDevices
import { EditForm } from "./EditForm";


const Modal = ({show,onClose,optionNow, id,name,description,image,setId,setImage,setDescription,setName}) =>{
    if(!show) return null;

    const executeAction = (id) =>{
      onClose();
      
      optionNow.callBack(id);
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-neutral-900 p-5 rounded-lg w-1/3">
          <h2 className="text-xl font-bold mb-4">{optionNow.header} </h2>
          <h2 className="text-m font-bold mb-4">( {id} ) </h2>

          <div className="mb-4">{optionNow.mostraBody ? optionNow.body : <EditForm id={id} setName={setName} setDescription={setDescription} setImage={setImage} setId={setId} name={name} description={description} image={image} ></EditForm>}</div>
          <button 
            onClick={onClose} className="mt-4 mr-5 bg-gradient-to-r from-blue-500 to-blue-800 bg-blue-500 text-white px-4 py-2 rounded hover:animate-pulse"
          >
            Cancelar
          </button>
          <button 
            onClick={() => executeAction(id)} 
            className={` ${optionNow.mostraBody? 'mt-4 mr-5 bg-gradient-to-r from-red-500 to-red-900 bg-blue-500 text-white px-4 py-2 rounded ' : 'mt-4 mr-5 bg-gradient-to-r from-green-500 to-green-900 bg-green-500 text-white px-4 py-2 rounded' } hover:animate-pulse`}
          >
            {optionNow.label}
          </button>
        </div>
      </div>
    );
}

export default Modal
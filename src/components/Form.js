import React from 'react'
import Close from '../assets/close.svg'

const Form = ({isModalOpen, closeForm, onSubmit}) => {
  return (
    <div className={isModalOpen? "modal showModal": "modal closeModal"}>
      <div>
        <button onClick={closeForm}>
          <img src={Close} alt="close"/>
        </button>
        <div>
          <form onSubmit={onSubmit} encType="multipart/form-data">
            
            <h1>Quiero ser Cuboxer</h1>
            <p>Llena el siguiente formulario y en breve un agente se pondrá en contacto.</p>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="nombre" placeholder="Nombre"/>
            <input type="text" name="telefono" placeholder="Teléfono"/>
            <button className="form-button-filled">Enviar solicitud</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

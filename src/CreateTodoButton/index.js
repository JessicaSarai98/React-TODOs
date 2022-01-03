import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        /*si estaba en abierto ahora estara cerrado
        true => false o true => !true*/
        props.setOpenModal(prevState => !prevState) //podemos mandar directamente el valor al estado o enviar una funcion (devolver el estado anterior) 
    };

    return(
        <button 
        className="CreateTodoButton"
        onClick =  {onClickButton} //evento de click 
        >
            +
        </button>
    );
}

export { CreateTodoButton }
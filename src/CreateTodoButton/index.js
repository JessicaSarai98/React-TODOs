import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton = () => {
        alert('Aquí se debería de abrir el modal');
    };

    return(
        <button 
        className="CreateTodoButton"
        onClick =  {onClickButton} //evento de click 
        >+</button>
    );
}

export { CreateTodoButton }
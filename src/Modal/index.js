import React from 'react'; 
import ReactDOM  from 'react-dom';
import './Modal.css'

/*creando componente Modal y devuelve createPortal
el cual le vamos a enviar un form, o lo que sea
le vamos a enviar un hijo
*/
function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal') 
    );
}

export { Modal }
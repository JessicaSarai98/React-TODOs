import React from 'react'; 
import { TodoContext } from '../TodoContext';
import './TodoForm.css'
function TodoForm(){

    //creando estado chiquito
    const [newTodoValue, setNewTodoValue] = React.useState(''); 

    //importando saveTodo de TodoContext 
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext); 

    const onChange = (event) => {
        setNewTodoValue(event.target.value); 
    };   

    const onCancel = () =>{
        //Cancelar 
        setOpenModal(false); 
    };

    const onSubmit = (event) => {
        //ayuda a que el form al ser enviado no recarga pagina
        event.preventDefault(); 
        //Añadir TODO
        addTodo(newTodoValue); 
        setOpenModal(false); 
    }; 

    return(
        <form onSubmit = {onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    ); 

}
//no olvidar por cada componente siempre agregar lo siguiente para llamarlo desde otro componente 
export { TodoForm }
import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'; 
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){
    const {error, 
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
     } = React.useContext(TodoContext); 
    return(
        <React.Fragment>
     {/*<TodoCounter /> Comentando componente*/} 
        <TodoCounter //se comento los sig porque ya no se va a enviar, se van a recibir de c/u de los componentes
            //total= {totalTodos}
           //    completed={completedTodos}
        /> 
        <TodoSearch />
                <TodoList >   
                {error && <TodosError error= {error}/>} 
                {loading && <TodosLoading />} 
                {!loading && !searchedTodos.length && <EmptyTodos />} 
    
                {searchedTodos.map(todo => (
                //mandando key a los componentes para que identificar
                //cual componente es cual dentro de una lista y asi se evite
                //renders innecesarios cuando un elemento no debe cambiar
                <TodoItem 
                key ={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete ={() => completeTodo(todo.text)}
                onDelete ={() => deleteTodo(todo.text)}
                /> 
            ))}
            </TodoList>
            {!!openModal && ( //si openModal  es true entonces renderiza
                <Modal>
                   <TodoForm /> 
                </Modal>
            )}
        <CreateTodoButton 
        setOpenModal={setOpenModal} 
        />
    </React.Fragment>
    );
}

export { AppUI };
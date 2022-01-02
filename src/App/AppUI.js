import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue, //searchValue es igual al estado 
    setSearchValue, //funcion para actualizar estado
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
     {/*<TodoCounter /> Comentando componente*/} 
        <TodoCounter 
            total= {totalTodos}
            completed={completedTodos}
        /> 
        <TodoSearch 
        //
        searchValue={searchValue} //searchValue es igual al estado 
        setSearchValue={setSearchValue} //funcion para actualizar estado
        />
        <TodoList>
        {searchedTodos.map(todo => (
            //mandando key a los componentes para que identificar
            //cual componente es cual dentro de una lista y asi se evite
            //renders innecesarios cuando un elemento no debe cambiar
            <TodoItem key ={todo.text} text={todo.text} completed={todo.completed}
                onComplete ={() => completeTodo(todo.text)}
                onDelete ={() => deleteTodo(todo.text)}
            /> 
        ))}
        </TodoList>
        <CreateTodoButton />
    </React.Fragment>
        );
}

export { AppUI };
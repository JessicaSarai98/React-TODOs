//import './App.css';
import React from 'react'; 
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
/*
Podemos hacer lo siguiente
const url ="https://....."
<img src={{url}} .... 
en vez de escribir <img src="https....*/
 
//lista falsa de todo's, es un array con objetos y cada objeto tendra propiedades 
const todos = [
  {text: 'cortar cebolla', completed:false}, //creando TODO e inicializando como falso porque no está completado
  {text: 'Tomar curso de intro a react', completed:false},
  {text: 'llorar con la llorona xd', completed:false}
]

//componentes empiezan con mayuscula
function App() {
  return (
<React.Fragment>
  {/*<TodoCounter /> Comentando componente*/} 
    <TodoCounter /> 
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
        //mandando key a los componentes para que identificar
        //cual componente es cual dentro de una lista y asi se evite
        //renders innecesarios cuando un elemento no debe cambiar
        <TodoItem key ={todo.text} text={todo.text}/>
      ))}
      </TodoList>
    <CreateTodoButton />
</React.Fragment>
  );
}

export default App;

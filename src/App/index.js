import React from 'react'; 
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*
Podemos hacer lo siguiente
const url ="https://....."
<img src={{url}} .... 
en vez de escribir <img src="https....*/
 
/*lista falsa de todo's, es un array con objetos y cada objeto tendra propiedades 
const todos = [
  {text: 'cortar cebolla', completed:true}, //creando TODO e inicializando como falso porque no está completado
  {text: 'Tomar curso de intro a react', completed:false},
  {text: 'llorar con la llorona xd', completed:false}
]*/

/* lista verdadera  pero no lo correcto
const defaultTodos = [
  {text: 'cortar cebolla', completed:true}, //creando TODO e inicializando como falso porque no está completado
  {text: 'Tomar curso de intro a react', completed:false},
  {text: 'llorar con la llorona xd', completed:false},
  {text: 'Dormir JAJAJA', completed:true}
]*/


//componentes empiezan con mayuscula
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider> 
  );
}

export default App;

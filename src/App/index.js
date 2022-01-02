import React from 'react'; 
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

/* lista verdadera  */
const defaultTodos = [
  {text: 'cortar cebolla', completed:true}, //creando TODO e inicializando como falso porque no está completado
  {text: 'Tomar curso de intro a react', completed:false},
  {text: 'llorar con la llorona xd', completed:false},
  {text: 'Dormir JAJAJA', completed:true}
]

//componentes empiezan con mayuscula
function App() {

  const [todos, setTodos] = React.useState(defaultTodos); //mostrar la lista de actividades
  const [searchValue, setSearchValue] = React.useState(''); 

  //filtrando los todos que tienen la propiedad completed o true
  const completedTodos = todos.filter(todo => !!todo.completed).length; //¿cuántos todos completados?

  //cantidad total de todos 
  const totalTodos = todos.length; 

  //
  let searchedTodos =[]; 

  //si los usuarios no han escrito nada entonces pasa, si no se filtra la cant de todos que se guarda en searchedTodos
  if(!searchValue.length >= 1){
    searchedTodos = todos; 
  } else{
    searchedTodos = todos.filter(todo => { //llamando a c/u de los todos y x c/u se convierte texto en minuscula
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); //en cual de los todos que tenemos incluye lo que se está ingresando
    });  
  }

  /*causando re-render y reciba nueva lista de todos 
  cada que reciba un texto va a buscar cual de todos los todos de la lista todos cumple con la condicion
  el texto con el mismo texto. Si el texto cumple con las condiciones, la propiedad completed se vuelve true*/
  const completeTodo = (text) => {
    const todoIndex  = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];  //inyectando todos los todos 
    newTodos[todoIndex].completed =true; 
    setTodos(newTodos); //actualizando estado
  };
    /*examinando todo x todo y ver cual tiee exactamente ese texto y se obtendra su posicion 
    otra manera de hacerlo: 

    const todoIndex = todos.findIndex(todo => todo.text == text ); 
    todos[todoIndex] = {
      text: todos[todoIndex].text ,
      completed: true
    }*/

    const deleteTodo = (text) => {
      const todoIndex  = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];  //inyectando todos los todos 
      newTodos.splice(todoIndex,1); //eliminar desde todoIndex y solo uno
      setTodos(newTodos); //actualizando estado
    };
  
  return (
    <AppUI 
      totalTodos= {totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} //searchValue es igual al estado 
      setSearchValue={setSearchValue} //funcion para actualizar estado
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />  
  );
}

export default App;

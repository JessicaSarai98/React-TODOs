import React from 'react'; 
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

    /*const estado = React.useState('Juan');
    se crea un estado vacio y se está guardando el la variable searchValue y se tiene una funcion
    para actualizar este valor 
    const [searchValue, setSearchValue] = React.useState(''); se cambió a App.js*/ 

    /*funcion para escuchar los cambios, en este caso del usuario al ingresar un texto
    llama funcion setSearchValue para actualizar*/
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    };

    return (
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value = {searchValue}
        //conectando interaccion, metodo onChange en input, el valor del input debe de ser igual al estado
        // 
        onChange={onSearchValueChange} 
        />
    );
    /*devolviendo un array y demostrando como funciona el estado con varios elementos dentro de un mismo compoente
    return [
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value = {searchValue}
        //conectando interaccion, metodo onChange en input, el valor del input debe de ser igual al estado
        // 
        onChange={onSearchValueChange} //detecta los cambios ingresados en el input
        //onChange ={() => setSearchValue('Enrique')} cuando detecta el cambio ya no será Juan si no Enrique
        />,
        <p>{searchValue}</p> //lo que se vaya ingresando en el input tambien se muestra en otras partes 
    ];*/
}

export { TodoSearch }
import React from 'react'; 

/*no solo devuelve los todos, si no que devuelve el elemento que hayamos guardado en localStorage
itemName es el elemento que recogeremos y salvaremos a futuro en el localStorage
LLamando a LocalStorage para traernos algun elemento, el que nos envien como argumento itemName*/
function useLocalStorage(itemName, initialValue){
    //estado de error
    const [error, setError] = React.useState(false); 
    //estado de carga
    const [loading, setLoading] = React.useState(true); 
     //Dentro del Hook se pueden llamar los estados - estado x defecto 
     const [item, setItem] = React.useState(initialValue); //mostrar la lista de actividades
    
     //simulando que tardara un rato en mostrar 
    React.useEffect(() => {
      setTimeout(() => { //ejecuta el codigo dentro de 1000
       try{
              //llamando local Storage
          const localStorageItem = localStorage.getItem(itemName); 
          let parsedItem; 
      
          //si no hay nada en localStorage (usuarios nuevos) - verificar is existe 
          if(!localStorageItem){
            localStorage.setItem('itemName', JSON.stringify(initialValue));  //crea un array vacio por defecto 
            parsedItem = initialValue; 
          }else{
            parsedItem= JSON.parse(localStorageItem)
          }
            //actualizar estado y entregarnos el verdadero valor que está guardado en localStorage
            setItem(parsedItem);
            setLoading(false); //todo funcionó, ya terminó de cargar
          }catch(error){
            setError(error); 
          }
      }, 1000); 
    });
  
      /*en vez de llamar a setItem como estaba anteriormente, se va a llamar esta constante 
      ahora se queda con la ultima version del localStorage
      Por otra parte no se pone en efecto, porque no es algo que se deba realizar apenas cargando*/
      const saveItem = (newItem) => {
        try{
          //convertir en string los Item
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem); //guarda la info en itemName y enviar string actualizado
            setItem(newItem); //evitar que se recargue la pagina, modificar estado. Guardar actualizaciones que nos envien en localStorage
            }catch(error){
              setError(error); 
            }
          };
  
          return {
            item,
            saveItem,
            loading,
            error,
          }; 
  }

  export { useLocalStorage }; 
  
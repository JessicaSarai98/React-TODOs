import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

//cont e = React.createElement

/*function App(){
  return(
    //lo sig es lo mismo que está en React.createE... pero parecio más a HTML
    <h1 id="title">
      Oli react
    </h1>
   // React.createElement('h1',{id:'title'}. 'Oli React') 
   
  )
}
*/
//ReactDOM.render(e(LikeButton),root)

//Renderizando un componente que se guarda en App.js y ademas utilizando sintax JSX
ReactDOM.render(
  //<React.StrictMode>
  //Renderizando un componente llamado App
    <App />,
  //</React.StrictMode>,
  document.getElementById('root')
);


import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  
  //Obtener las tareas guardadas de local storage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  
  //Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando el estado dentro de local storage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  //Acceder a localstorage para comprobar si mostrarCompletadas es null
  let configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') ? JSON.parse(localStorage.getItem('mostrarCompletadas')) : true;

  //Establecemos el estado de tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  console.log(tareas);
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
        />
    </div>
  );
}

export default App;

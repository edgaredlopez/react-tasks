import { createContext, useState, useEffect } from "react"; //Importamos el metodo createContext de REACT
import { tasksEnJson as dataArchivo } from "../data/tasks"; //Archivo que contiene las tareas en formato JSON

//El que almacena los datos
export const TaskContext = createContext(); //Creamos el contexto y lo exportamos para que lo puedan usar los componentes hijos que lo necesiten.
//El contexto es un OBJETO que tiene un ATRIBUTO llamado:
//PROVIDER, que es el que va a proveer el valor a los componentes hijos que lo necesiten
//y un atributo llamado CONSUMER, que es el que va a consumir el valor que le provee el PROVIDER a los componentes hijos que lo necesiten.

//El conmpoennte que engloba a los componentes hijos que lo necesiten

export function TaskContextProvider(props) {
  const [tasksGeneral, setTasksGeneral] = useState([]); //State que almacenara las tareas. Inicializamos con un array vacío

  //Pero cuando se renderice la página, se ejecutará el useEffect
  useEffect(() => {
    setTasksGeneral(dataArchivo);
  }, []); //Dejamos el array vacio para que no repinte la pagina desde 0 con algun cambio en uno de los state

  function funcionCreateTask(titleP, descriptionP) {
    //Con setTask actualizaremos el state tasksGeneral y este a su vez re-renderizará en pantalla solo el componente que lo use
    setTasksGeneral([
      ...tasksGeneral,
      {
        id: tasksGeneral.length + 1,
        title: titleP,
        description: descriptionP,
      },
    ]); //Copia todo lo que tenga el array tasksGeneral y añadele el nuevo taskParametro sin modificar directamente el array tasksGeneral, cuando lo tengas y todo unido, retronamelo para mandarlo a setTasksGeneral para que ahi si modifique el array tasksGeneral
  }

  function funcionDeleteTask(idTareaP) {
    setTasksGeneral(
      tasksGeneral.filter((taskIterando) => taskIterando.id !== idTareaP)
    ); //Con setTasksGeneral actualizaremos el array tasksGeneral. Pero para actualizarlo RECORREMOS el array tasksGeneral y FILTRAMOS para que solo nos devuelva los elementos que no tengan el id que le pasamos por parametro. En el metodo filter se itera el array completo y se va evaluando cada elemento y preguntamos si el elemento que se esta iterando en su ID NO ES IGUAL al id que le pasamos por parametro. Si es diferente, se añade a un nuevo array y si es igual, no se añade. Al final, se devuelve el nuevo array con los elementos que no tienen el id que le pasamos por parametro. Filter retorna todo el araray de una vez ya actualizado
  }

  return (
    // Aqui creamos un PROVIDER usando el Objeto TaskContext y le pasamos el atributo value, que es el que va a proveer el valor a los componentes hijos que lo necesiten
    <TaskContext.Provider
      value={{
        tasksGeneral: tasksGeneral, //Le pasamos el state tasksGeneral
        funcionCreateTask: funcionCreateTask, //Le pasamos la funcion funcionCreateTask
        funcionDeleteTask: funcionDeleteTask, //Le pasamos la funcion funcionDeleteTask
      }}
    >
      {props.children}{" "}
      {/*Es como decirle que renderize los  los componentes hijos que va a recibir, children es un atributo especial de REACT, hay que repetar la sintaxis*/}
    </TaskContext.Provider>
  );
}

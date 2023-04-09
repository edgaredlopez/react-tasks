import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  //State para almacenar los valores del formulario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Recuperamos los valores del contexto
  const { funcionCreateTask } = useContext(TaskContext);

  //Maneja el evento submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); //Evita que se recargue la página

    //Validamos que los campos no esten vacios, TRIM lo que hace es eliminar los espacios en blanco, si el usuario solo escribe espacios en blanco, el campo estara vacio
    if (title.trim() === "" || description.trim() === "") {
      alert("Los campos no pueden estar vacios");
    } else {
      //Invocar a la funcion que recibimos como parametro para que realice la creacion de la tarea
      funcionCreateTask(title, description);
      //Reseteamos los campos
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="max-w-sm mx-auto pt-5">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-slate-800 p-5 mb-5 flex flex-col justify-center items-center rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          type="text"
          className="bg-slate-100 p-3 w-full mb-5 rounded-md font-sans text-lg"
          placeholder="Escribe tu  tarea"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          type="text"
          className="bg-slate-100 p-3 w-full mb-5 rounded-md font-sans text-lg"
          placeholder="Escribe una descripción"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
        />
        <button className="bg-green-600 px-2 py-1 w-44 text-white rounded-md">Añadir</button>
      </form>
    </div>
  );
}

export default TaskForm;

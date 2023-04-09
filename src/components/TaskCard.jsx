import { useContext } from "react"; //Importamos el metodo useContext de REACT
import { TaskContext } from "../context/TaskContext"; //Importamos el contexto

function TaskCard({ taskInstancia }) {
  const { funcionDeleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md max-w-xs min-w-200 flex flex-col justify-between text-center">
      <div>
        <h1 className="text-xl font-bold capitalize overflow-hidden ">{taskInstancia.title}</h1>
        <p className="text-gray-400 text-sm  overflow-hidden ">
          {taskInstancia.description}
        </p>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mt-2"
        onClick={() => {
          funcionDeleteTask(taskInstancia.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;

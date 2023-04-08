import TaskCard from "./TaskCard";
import { useContext } from "react"; //Importamos el metodo useContext de REACT
import { TaskContext } from "../context/TaskContext"; //Importamos el contexto

function TaskList() {
  const { tasksGeneral } = useContext(TaskContext);

  if (tasksGeneral.length === 0) {
    return (
      <h1 className="text-white text-3xl font-bold text-center">
        No hay tareas
      </h1>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  justify-center items-center">
      {tasksGeneral.map((taskIterando) => (
        <TaskCard key={taskIterando.id} taskInstancia={taskIterando} />
      ))}
    </div>
  );
}

export default TaskList;

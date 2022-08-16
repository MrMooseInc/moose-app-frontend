import Task from "./Task.js";

const Tasks = ({ data, onAddDose }) => {
  return (
    <>
      {data.map((task) => (
        <Task task={task} onAddDose={onAddDose} />
      ))}
    </>
  );
};

export default Tasks;

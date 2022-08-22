import Task from "./Task.js";

const Tasks = ({ data, onAddDose, onRemoveDose }) => {
  return (
    <>
      {data.map((task) => (
        <Task task={task} onAddDose={onAddDose} onRemoveDose={onRemoveDose} />
      ))}
    </>
  );
};

export default Tasks;

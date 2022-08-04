import Task from "./Task.js";

const Tasks = ({ data }) => {
  return (
    <>
      {data.map((task) => (
        <Task task={task} />
      ))}
    </>
  );
};

export default Tasks;

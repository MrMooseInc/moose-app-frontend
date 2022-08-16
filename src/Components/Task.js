const Task = ({ task, onAddDose }) => {
  return (
    <div>
      <h1>{task.name}</h1>
      <p key={task.id}>
        Doses Requred: {task.doses_required}. Doses Given: {task.doses_given}
      </p>
      <button onClick={() => onAddDose(task.id)}>Add Dose</button>
    </div>
  );
};

export default Task;

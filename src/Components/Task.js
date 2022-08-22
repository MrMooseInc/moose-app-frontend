const Task = ({ task, onAddDose, onRemoveDose }) => {
  return (
    <div>
      <h1>{task.name}</h1>
      <p key={task.id}>
        Doses Requred: {task.doses_required}.  
        <span onDoubleClick={() => onRemoveDose(task.id)}> Doses Given: {task.doses_given}</span>
      </p>
      <button onClick={() => onAddDose(task.id)} >Add Dose</button>
    </div>
  );
};

export default Task;
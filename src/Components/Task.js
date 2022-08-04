const Task = ({task}) => {
  return (
    <div>
      <h1>{task.name}</h1>
      <p key={task.id}>, Doses Requred: {task.doses_required}. Doses Given: {task.doses_given}</p>
    </div>
  )
}

export default Task
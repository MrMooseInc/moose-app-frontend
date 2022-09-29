import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Task from "./Task.js";

const Tasks = ({ data, onAddDose, onRemoveDose, onDeleteTask, onEdit }) => {
  return (
    <Container className="float-none">
      {data.map((task) => (
        <>
          <Task task={task} onAddDose={onAddDose} onRemoveDose={onRemoveDose} onDeleteTask={onDeleteTask} onEdit={onEdit} />
          <br />
        </>
      ))}
    </Container>
  );
};

export default Tasks;

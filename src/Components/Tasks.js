import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Task from "./Task.js";

const Tasks = ({ data, onAddDose, onRemoveDose }) => {
  return (
    <Container>
      {data.map((task) => (
        <>
        <Task task={task} onAddDose={onAddDose} onRemoveDose={onRemoveDose} />
        <br/>
        </>
      ))}
    </Container>
  );
};

export default Tasks;

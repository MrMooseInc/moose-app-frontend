import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Task = ({ task, onAddDose, onRemoveDose, active }) => {
  return (
    <>
      <Card key={task.id}>
      <Card.Header>{task.name}</Card.Header>
      <Card.Body>
        <Card.Text>
            Doses Given: {task.doses_given}
          <br/>Doses Requred: {task.doses_required}
        </Card.Text>
        <Button variant="primary" size="xl"
          onClick={() => onAddDose(task.id)}>Add Dose</Button>{" "}
        <Button variant="secondary" size="xs"
          onClick={() => onRemoveDose(task.id)}>Remove Dose</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default Task;
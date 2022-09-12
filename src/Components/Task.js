import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { XLg } from "react-bootstrap-icons";

const Task = ({ task, onAddDose, onRemoveDose, onDeleteTask }) => {
  return (
    <>
      <Card key={task.id}>
        <Card.Header>
          {task.name}
          <Button
            className="float-end"
            variant="outline-danger"
            size="sm"
            onClick={() => onDeleteTask(task.id)}
          >
            <XLg />
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Doses Given: {task.doses_given}
            <br />
            Doses Requred: {task.doses_required}
          </Card.Text>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onAddDose(task.id)}
          >
            Add Dose
          </Button>{" "}
          <Button
            variant="secondary"
            size="md"
            onClick={() => onRemoveDose(task.id)}
          >
            Remove Dose
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;

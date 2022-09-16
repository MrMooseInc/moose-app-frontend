import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { XLg } from "react-bootstrap-icons";

const allDosesComplete = (task) => {
  return task.doses_given >= task.doses_required
}

const Task = ({ task, onAddDose, onRemoveDose, onDeleteTask }) => {
  return (
    <>
      <Card
        key={task.id}
        bg= {allDosesComplete(task) ? "secondary" : ""}
        
      >
        <Card.Header>
          {task.name}
          <Button
            className="float-end "
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
            disabled={allDosesComplete(task)}
          >
            Add Dose
          </Button>{" "}
          <Button
            variant="info"
            size="md"
            onClick={() => onRemoveDose(task.id)}
            disabled={task.doses_given <= 0}
          >
            Remove Dose
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;

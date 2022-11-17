import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  XLg,
  CaretUp,
  CaretUpFill,
  CaretDown,
  CaretDownFill,
} from "react-bootstrap-icons";
import EditTask from './EditTask.js';

const allDosesComplete = (task) => {
  return task.doses_given >= task.doses_required;
};

const Task = ({ task, onAddDose, onRemoveDose, onDeleteTask, onEdit }) => {
  return (
    <>
      <Card key={task.id} bg={allDosesComplete(task) ? "secondary" : ""}>
        <Card.Header>
          <h3 className="float-start">{task.name}</h3>
          <Button
            className="float-end"
            variant="outline-danger"
            size="sm"
            onClick={() => { if (window.confirm('Are you sure you wish to delete this task?')) onDeleteTask(task.id)}}
          >
            <XLg />
          </Button>
        </Card.Header>
        <Card.Body>
        <EditTask task={task} onEdit={onEdit} className="float-end"/>
          <div className="float-start">
          <Card.Text>
            <span>{allDosesComplete(task) ? "Daily Doses Completed!!!" : `Daily Doses left: ${task.doses_required - task.doses_given}`}</span>
          </Card.Text>  
      
          <div className="mb-2">
            <Button
              variant={allDosesComplete(task) ? "outline-primary" : "primary"}
              size="lg"
              onClick={() => onAddDose(task.id)}
              disabled={allDosesComplete(task)}
            >
              {allDosesComplete(task) ? <CaretUp /> : <CaretUpFill />}
              <h3>{task.doses_given}</h3>
            </Button>
          </div>
          <div>
            <Button
              variant={task.doses_given <= 0 ? "outline-info" : "info"}
              size="lg"
              onClick={() => onRemoveDose(task.id)}
              disabled={task.doses_given <= 0}
            >
              {task.doses_given <= 0 ? <CaretDown /> : <CaretDownFill />}
            </Button>
          </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;

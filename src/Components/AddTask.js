import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [doses_required, setDoses] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name || !doses_required)  {
      alert('Please enter task name and doses required')
      return
    }

    onAdd({ name, doses_required })
    setName('')
    setDoses('')
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Add Task</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter task name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Doses Required</Form.Label>
                <Form.Control
                  type="number"
                  value={doses_required}
                  onChange={(e) => setDoses(e.target.valueAsNumber)}
                  placeholder="Enter doses required"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Task
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
};

export default AddTask;

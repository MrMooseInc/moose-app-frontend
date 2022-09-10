import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const AddTask = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Add Task</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter task name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Doses Required</Form.Label>
                <Form.Control type="text" placeholder="Enter doses required" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddTask;

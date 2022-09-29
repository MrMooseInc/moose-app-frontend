import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {InfoLg} from "react-bootstrap-icons"

const EditTask = ({task, onEdit}) => {
  const [name, setName] = useState("");
  const [doses_required, setDoses] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !doses_required) {
      alert("Please enter task name and doses required");
      return;
    }

    onEdit({ name, doses_required }, task.id);
    setName("");
    setDoses("");
    handleClose();
  };

  return (
    <>
      <Button className="float-end" variant="info" onClick={handleShow}><InfoLg />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;

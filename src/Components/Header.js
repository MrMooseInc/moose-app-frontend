import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// import addButton from "./addButton";

const Header = ({ onAdd, showAdd }) => {
  return (
    <Container>
    <Stack direction="horizontal" gap={3}>
      <h1>Task Tracker</h1>
      <Button 
        className="float-none"
        variant={ showAdd ? "danger" : "success" } 
        type="button" 
        onClick={onAdd}>
        {showAdd ? "Close" : "Add Task"}
      </Button>
    </Stack>
    </Container>
  );
};

export default Header;

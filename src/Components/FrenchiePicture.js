import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const FrenchiePicture = ({ picture }) => {
  return (
    <Container>
      <Image className="img-thumbnail float-center" alt="A Frenchie" src={`${picture}`} rounded></Image>
    </Container>
  );
};

export default FrenchiePicture;

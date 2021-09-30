import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavBar = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Navbar.Brand href="#">StriveBooks</Navbar.Brand>
      <Nav className="justify-content-sm-between ">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavBar;

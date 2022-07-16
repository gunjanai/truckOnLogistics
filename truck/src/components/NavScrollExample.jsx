import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Nav.css";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar" fixed="top" variant="dark">
      <Container fluid>
        <img src="logo.jpg" className="logo" />
        <Navbar.Brand href="#" className="text-color" color="white">
          Truck On Logistics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-color">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-color">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="text-color">
              Services
            </Nav.Link>
            <Nav.Link href="#action2" className="text-color">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

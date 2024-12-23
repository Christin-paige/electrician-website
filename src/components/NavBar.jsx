import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="#Hero">
            <img
              src="/images/let-there-logo.png"
              width="175"
              height="100"
              className="d-inline-block align-top"
              alt="let there be light logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Hero">Home</Nav.Link>
            <Nav.Link className="link" as={Link} to="About" offset={-100}>
              About
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="Services" offset={-150}>
              Services
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="Projects" offset={-100}>
              Projects
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="Contact" offset={-150}>
              Contact
            </Nav.Link>
          </Nav>

          <i className="bi bi-telephone">
            <strong> Call us today! </strong>(301)367-7790
          </i>
          <p>
            <a href="tel:3013677790"></a>
          </p>
        </Container>
      </Navbar>
    </>
  );
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <>
    
    <Navbar className="bg-body-tertiary" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="/images/let-there-logo.png"
          width="175"
          height="100"
          className="d-inline-block align-top"
          alt="let there be light logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
       
          <i className="bi bi-telephone"><strong>  Call us today! </strong>(301)367-7790</i>
<p><a href="tel:3013677790"></a></p>
    
        </Container>
       
      </Navbar>
  
     
      
  </>
  );
}


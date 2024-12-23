import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact () {
  return (
    <div id="Contact"className="heading">
    <h2>Request a Free Quote</h2>
    
    <Form className="form">
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First and Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      
      </Row>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

   

     

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}


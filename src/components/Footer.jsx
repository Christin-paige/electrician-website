import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer (){
    return(
        <>
        <Container className="footer-container">
     
<h2>  <img
          src="/images/let-there-logo.png"
          width="200"
          height="125"
          className="d-inline-block align-top"
          alt="let there be light logo"
        /></h2>
<Row className="footer-grid">
<Col className="phone">
<i className="bi bi-telephone"><strong>  Call us today!</strong></i>
<p><a href="tel:3013677790">(301)367-7790</a></p>
</Col>
<Col className="email">
<i class="bi bi-envelope"><strong>  Email us!</strong></i>
<p> <a href="mailto:TroyElliottYoung@gmail.com">TroyElliottYoung@gmail.com</a></p>
</Col>
<Col className="areas">
<i class="bi bi-map"><strong>  Proudly serving the following areas:</strong></i>
<p>Maryland, NOVA, DC</p>
</Col>

</Row>
<p><strong>Hours:</strong> Mon-Fri 8 AM - 6 PM</p>
<p><strong>Certifications and Licenses</strong></p>
<p>(add here if applicable)</p>
<div className="footer-legal">
    <p>© 2024 Let There Be Light Electrical. All rights reserved.</p>
  </div>
<Button>Request a Free Quote Today!</Button>


        </Container>
        </>
    )
}
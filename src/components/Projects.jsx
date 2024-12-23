import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Projects() {
  return (
    <>
      <div className="full-width">
        <Container className="projects-container">
          <h2>Projects</h2>

          <Row>
            <Col>
              {' '}
              <Image
                className="project-images"
                src="/images/bathroom-lights.jpg"
                rounded
              />
              <p className="description">Bathroom light installation</p>
            </Col>
            <Col>
              <Image
                className="project-images"
                src="/images/dining-lights.jpg"
                rounded
              />
              <p className="description">
                Contemporary dining light intstallation
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="project-images"
                src="/images/kitchen-lights.jpg"
                rounded
              />
              <p className="description">Kitchen lighting</p>
            </Col>
            <Col>
              <Image
                className="project-images"
                src="/images/hanging-lights.jpg"
                rounded
              />
              <p className="description">Pendant light installation</p>
            </Col>
            <Col>
              <Image
                className="project-images"
                src="/images/solar-lights.jpg"
                rounded
              />
              <p className="description">Solar panel installation</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function About() {
  return (
    <div id="About">
      <div  className="full-width">
        <Container className="about-container">
          <h2>About</h2>

          <Row>
            <Col>
              {' '}
              <Image
                className="electrician-portrait"
                src="/images/electrician-portrait.jpg"
                rounded
              />
            </Col>
            <Col>
              <p>
                "At Let There Be Light Electrical, we take pride in providing
                reliable, professional, and efficient electrical services to
                homes and businesses in our community. With over a decade of
                experience, we specialize in everything from routine repairs and
                installations to complete electrical upgrades and custom
                lighting solutions. Our team is committed to delivering
                exceptional workmanship, prioritizing safety, and ensuring your
                satisfaction at every step. Whether you're looking to brighten
                your home, power your business, or troubleshoot an issue, you
                can trust us to get the job done right. At Let There Be Light
                Electrical, we don't just power homes—we illuminate lives."
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

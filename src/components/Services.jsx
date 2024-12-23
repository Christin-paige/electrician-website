import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Services() {
  return (
    <>
      <Container className="services-container">
        <Row>
          <h2>Services</h2>

          <Col>
            At Let There Be Light Electrical, we offer a full range of
            electrical services tailored to meet your needs. From wiring and
            panel upgrades to custom lighting installations and troubleshooting,
            our expert team is here to deliver top-quality solutions with safety
            and precision. Whether you're tackling a home renovation, need
            emergency repairs, or want to enhance your space with
            energy-efficient lighting, we have the skills and experience to make
            it happen. No job is too big or small—let us bring the power and
            light to your next project!
          </Col>
        </Row>
        <Row className="services-container">
          <h4>Residential</h4>

          <Col>
            <ul>
              <li>
                <strong>Electrical Repairs: </strong>Fixing faulty outlets,
                wiring, switches, or circuit breakers
              </li>
              <li>
                <strong>Lighting Installations: </strong>Indoor and outdoor
                lighting, recessed lights, ceiling fans, or chandeliers.
              </li>
              <li>
                <strong>Wiring and Rewiring:</strong> New home wiring, rewiring
                for renovations, or upgrading outdated wiring.
              </li>
              <li>
                <strong>Panel Upgrades:</strong> Replacing or upgrading
                electrical panels for modern energy demands.
              </li>
              <li>
                <strong>Home Automation: </strong>Installing smart home systems,
                including lighting, thermostats, and security systems.
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <strong>Surge Protection:</strong> Installing whole-home surge
                protectors to safeguard appliances and electronics.
              </li>
              <li>
                <strong>Generator Installation: </strong>Installing and
                maintaining backup generators
              </li>
              <li>
                <strong>Troubleshooting:</strong>Troubleshooting: Diagnosing and
                solving electrical issues like flickering lights or power
                outages.
              </li>
              <li>
                <strong>Landscape Lighting:</strong>Landscape Lighting:
                Installing and maintaining outdoor lighting for gardens,
                pathways, and patios.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="services-container">
          <h4>Commercial</h4>

          <Col>
            <ul>
              <li>
                <strong>Electrical System Design:</strong> Creating and
                implementing systems for offices, retail spaces, or warehouses.
              </li>
              <li>
                <strong>Data and Network Cabling:</strong> Installing structured
                cabling for internet, phone, and network systems.
              </li>
              <li>
                <strong>Lighting Solutions:</strong> Energy-efficient LED
                retrofitting, emergency lighting, and parking lot lighting.
              </li>
              <li>
                <strong>Electrical Maintenance:</strong> Regular maintenance and
                inspections to prevent downtime.
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <strong>Code Compliance Upgrades:</strong> Ensuring electrical
                systems meet local and national safety standards.
              </li>
              <li>
                <strong>Power Distribution Systems:</strong> Installing
                transformers, switchgear, and other systems for power
                distribution.
              </li>
              <li>
                <strong>Security Systems:</strong> Installing and wiring alarms,
                cameras, and access control systems.
              </li>
              <li>
                <strong>Emergency Services:</strong> 24/7 troubleshooting and
                repairs for power outages and equipment failures.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

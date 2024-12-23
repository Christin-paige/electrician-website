import Button from 'react-bootstrap/Button';

export default function Hero() {
  return (
    <>
      <div id="Hero" className="hero-container bg-image d-flex justify-content-center align-items-center">
        <h1 className="hero-logo">
          Dependable Electrical Services for a Brighter Tomorrow
        </h1>
        <Button>Request a Free Quote</Button>
      </div>
    </>
  );
}

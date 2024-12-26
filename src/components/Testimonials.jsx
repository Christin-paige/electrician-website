import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonials">
        <h1 className="text-center">Testimonials</h1>
    <Carousel className="testimonials-container"activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img 
    src="https://fakeimg.pl/600x400/ffffff/909090?text=+" 
    alt="Placeholder" 
    style={{ display: 'block', width: '100%', height: '200px' }} 
  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="slide-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="testimonial-image"
    src="https://fakeimg.pl/600x400/ffffff/909090?text=+" 
    alt="Placeholder" 
    style={{ display: 'block', width: '100%', height: '200px' }} 
  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
    src="https://fakeimg.pl/600x400/ffffff/909090?text=+" 
    alt="Placeholder" 
    style={{ display: 'block', width: '100%', height: '200px' }} 
  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="slide-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

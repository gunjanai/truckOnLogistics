import Carousel from "react-bootstrap/Carousel";
import advice from "../advice.jpg";
import service from "../service.jpg";
import pricing from "../pricing.jpg";
import "../css/Hero.css";

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item" interval={1000}>
        <img
          className="d-block w-70 carousel-image"
          src={advice}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Professional Advice</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-70 carousel-image"
          src={service}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Professional Services</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70 carousel-image"
          src={pricing}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Competitive Pricing</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

import Card from "react-bootstrap/Card";
import "../css/Hero.css";

function ImageAndTextExample({ image, text }) {
  return (
    <>
      <Card bg="dark">
        <Card.Img variant="top" src={image} className="card-image" />
        <Card.Body text="white">
          <Card.Text className="card-text">{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageAndTextExample;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel, {
  slideCollection,
} from "../Carousels/WithFullScreen/Carousel";
// import { imgs } from "@/app/page";

interface props extends slideCollection {
  title?: string;
  text?: string;
}

function CardComponent({ imgs, title, text }: props) {
  return (
    <Card className='card'>
      <Carousel imgs={imgs}></Carousel>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
        {/* <Button variant='primary'>contact me</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
